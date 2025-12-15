import { BlockPrimaryCategory, blocksConfig, BlockSecondaryCategory } from "@/config/blocks";

/**
 * Constructs an absolute URL for media assets.
 *
 * @param path - The relative path to the media asset (e.g., "/media/avatars/1.png").
 * @returns A string representing the absolute URL to the media asset.
 */
export function toAbsoluteUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${cleanPath}`;
}

// Get the active category from the current path
export function getPrimaryCategory(path: string): BlockPrimaryCategory | null {
  const pathSegments = path.split("/");

  if (pathSegments[1] === "blocks") {
    // If there's a specific category in the URL, use it
    if (pathSegments[2]) {
      return blocksConfig.find((cat) => cat.slug === pathSegments[2]) || null;
    }
    // Default to the category marked as default when on /blocks
    return blocksConfig.find((cat) => cat.default === true) || null;
  }
  return null;
}

export function getSecondaryCategory(
  primaryCategory: BlockPrimaryCategory | null,
  path: string,
): BlockSecondaryCategory | null {
  if (!primaryCategory) return null;

  const pathSegments = path.split("/");

  if (pathSegments[1] === "blocks") {
    // If there's a specific secondary category in the URL, use it
    if (pathSegments[3]) {
      return (
        primaryCategory.sub?.find((cat) => cat.slug === pathSegments[3]) || null
      );
    }
    // Default to the first secondary category
    return primaryCategory.sub?.[0] || null;
  }
  return null;
}
