import * as fs from "fs";
import * as path from "path";
import { codeToHtml } from "shiki";

import type {
  BlockItem,
  BlockPrimaryCategory,
  BlockSecondaryCategory,
} from "@/config/blocks";

import { config } from "./config";

interface BlockFile {
  filename: string;
  relativePath: string;
  fullPath: string;
}

interface ProcessedBlock extends BlockItem {
  code: string;
  highlightedCode: string;
}

interface CategoryCache {
  category: {
    primary: string;
    secondary: string;
    title: string;
    cacheKey: string;
  };
  blocks: ProcessedBlock[];
  total: number;
  generatedAt: string;
}

interface SecondaryCategoryWithMeta extends BlockSecondaryCategory {
  primary: string;
  cacheKey: string;
}

function getAllSecondaryCategories(
  blocksConfig: BlockPrimaryCategory[],
): SecondaryCategoryWithMeta[] {
  const categories: SecondaryCategoryWithMeta[] = [];

  for (const primary of blocksConfig) {
    if (primary.sub) {
      for (const secondary of primary.sub) {
        categories.push({
          ...secondary,
          primary: primary.slug,
          cacheKey: `${primary.slug}.${secondary.slug}`,
        });
      }
    }
  }

  return categories;
}

function getBlockFilesInCategory(
  primary: string,
  secondary: string,
): BlockFile[] {
  const sourceBasePath = path.join(process.cwd(), "registry/default/blocks");

  try {
    const categoryPath = path.join(sourceBasePath, primary, secondary);
    const entries = fs.readdirSync(categoryPath, { withFileTypes: true });
    const blockFiles = entries
      .filter(
        (entry) =>
          entry.isFile() &&
          (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")),
      )
      .map((entry) => ({
        filename: entry.name,
        relativePath: path.join(primary, secondary, entry.name),
        fullPath: path.join(categoryPath, entry.name),
      }));

    return blockFiles;
  } catch {
    // Try alternative directory names (handle plural/singular mismatches)
    const alternativePaths = [
      path.join(sourceBasePath, primary, secondary.replace(/s$/, "")), // Remove trailing 's'
      path.join(sourceBasePath, primary, secondary + "s"), // Add trailing 's'
    ];

    for (const altPath of alternativePaths) {
      try {
        const entries = fs.readdirSync(altPath, { withFileTypes: true });
        const blockFiles = entries
          .filter(
            (entry) =>
              entry.isFile() &&
              (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")),
          )
          .map((entry) => ({
            filename: entry.name,
            relativePath: path.join(primary, secondary, entry.name), // Use original secondary slug
            fullPath: path.join(altPath, entry.name),
          }));

        if (blockFiles.length > 0) {
          return blockFiles;
        }
      } catch {
        // Continue trying other alternatives
      }
    }

    return [];
  }
}

async function processBlockFile(
  blockFile: BlockFile,
  blockItem: BlockItem,
): Promise<ProcessedBlock | null> {
  try {
    const code = fs.readFileSync(blockFile.fullPath, "utf-8");

    // Generate syntax highlighted code
    const highlightedCode = await codeToHtml(code, {
      lang: "tsx",
      theme: "github-dark-default",
      transformers: [
        {
          code(node) {
            node.properties["data-line-numbers"] = "";
          },
        },
      ],
    });

    // Extract block name from filename (remove extension)
    const blockName = path.basename(
      blockFile.filename,
      path.extname(blockFile.filename),
    );

    return {
      ...blockItem,
      name: blockItem.name || blockName,
      filename: blockFile.filename,
      code,
      highlightedCode,
      path: blockItem.path || blockFile.relativePath.replace(/\.(tsx|ts)$/, ""),
      relativePath: blockFile.relativePath,
    };
  } catch (error) {
    console.error(`Error processing ${blockFile.filename}:`, error);
    return null;
  }
}

async function processCategory(category: SecondaryCategoryWithMeta): Promise<{
  category: SecondaryCategoryWithMeta;
  blocks: ProcessedBlock[];
} | null> {
  try {
    // Get block files from the category-specific directory
    const blockFiles = getBlockFilesInCategory(category.primary, category.slug);

    const processedBlocks: ProcessedBlock[] = [];

    // Process each block item defined in the config
    if (category.blocks && category.blocks.length > 0) {
      for (const blockItem of category.blocks) {
        // Find the corresponding block file
        const matchingFile = blockFiles.find((file) => {
          const baseName = path.basename(
            file.filename,
            path.extname(file.filename),
          );
          return (
            baseName === blockItem.slug ||
            baseName === `block-${blockItem.slug}` ||
            file.filename === blockItem.filename
          );
        });

        if (matchingFile) {
          const processedBlock = await processBlockFile(
            matchingFile,
            blockItem,
          );
          if (processedBlock) {
            processedBlocks.push(processedBlock);
          }
        }
      }
    }

    return {
      category,
      blocks: processedBlocks,
    };
  } catch (error) {
    console.error(`Error processing category ${category.cacheKey}:`, error);
    return null;
  }
}

function generateCategoryCache(
  category: SecondaryCategoryWithMeta,
  blocks: ProcessedBlock[],
): CategoryCache {
  const cacheBasePath = path.join(
    process.cwd(),
    "registry/.cache/default/blocks",
  );
  const cacheFileName = `${category.cacheKey}.json`;
  const cacheFilePath = path.join(cacheBasePath, cacheFileName);

  const cacheData: CategoryCache = {
    category: {
      primary: category.primary,
      secondary: category.slug,
      title: category.title,
      cacheKey: category.cacheKey,
    },
    blocks,
    total: blocks.length,
    generatedAt: new Date().toISOString(),
  };

  // Ensure cache directory exists
  if (!fs.existsSync(cacheBasePath)) {
    fs.mkdirSync(cacheBasePath, { recursive: true });
  }

  fs.writeFileSync(cacheFilePath, JSON.stringify(cacheData, null, 2), "utf-8");

  return cacheData;
}

function generateMasterIndex(categoryCaches: CategoryCache[]): void {
  const cacheBasePath = path.join(
    process.cwd(),
    "registry/.cache/default/blocks",
  );
  const indexPath = path.join(cacheBasePath, "index.json");

  const indexData = {
    categories: categoryCaches.map((cache) => ({
      cacheKey: cache.category.cacheKey,
      primary: cache.category.primary,
      secondary: cache.category.secondary,
      title: cache.category.title,
      totalBlocks: cache.total,
      filename: `${cache.category.cacheKey}.json`,
    })),
    totalCategories: categoryCaches.length,
    totalBlocks: categoryCaches.reduce((sum, cache) => sum + cache.total, 0),
    generatedAt: new Date().toISOString(),
  };

  fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), "utf-8");
}

export async function buildBlockRegistry(): Promise<void> {
  console.log("🔨 Building block registry...");

  try {
    // Load blocks configuration
    const { blocksConfig } = await import("@/config/blocks");
    const secondaryCategories = getAllSecondaryCategories(blocksConfig);

    // Process each category and its blocks
    const categoryCaches: CategoryCache[] = [];

    for (const category of secondaryCategories) {
      const result = await processCategory(category);

      if (result && result.blocks.length > 0) {
        const cacheData = generateCategoryCache(result.category, result.blocks);
        categoryCaches.push(cacheData);
      }
    }

    // Generate master index
    if (categoryCaches.length > 0) {
      generateMasterIndex(categoryCaches);
    }

    console.log("✅ Generated block caches");
    console.log(`   Total: ${categoryCaches.length} category caches`);
  } catch (error) {
    console.error("Error building block registry:", error);
    throw error;
  }
}
