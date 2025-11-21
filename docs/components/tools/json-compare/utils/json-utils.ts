export interface ComparisonResult {
  differences: Record<string, any>;
  paths: string[];
}

export interface ParseResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Parse JSON string with error handling
 */
export function parseJSON(text: string): ParseResult {
  if (!text.trim()) {
    return {
      success: false,
      error: "JSON content is empty",
    };
  }

  try {
    const data = JSON.parse(text);
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid JSON format",
    };
  }
}

/**
 * Format a JSON path array into a readable string
 */
export function formatJSONPath(path: string[]): string {
  return path.join(".");
}

/**
 * Recursively compare two JSON objects and find keys in obj1 that don't exist in obj2
 * Preserves the hierarchical structure
 */
export function compareJSON(
  obj1: any,
  obj2: any,
  mode: "two-files" | "template" = "two-files",
  currentPath: string[] = [],
): ComparisonResult {
  const differences: Record<string, any> = {};
  const paths: string[] = [];

  // Handle null/undefined cases
  if (obj1 === null || obj1 === undefined) {
    return { differences, paths };
  }

  // If obj2 is null/undefined in template mode, include everything from obj1
  if (mode === "template" && (obj2 === null || obj2 === undefined)) {
    return {
      differences: obj1,
      paths: [formatJSONPath(currentPath)],
    };
  }

  // If obj1 is not an object, check if it exists in obj2
  if (typeof obj1 !== "object" || Array.isArray(obj1)) {
    if (obj2 === undefined || obj2 === null) {
      return {
        differences: obj1,
        paths: [formatJSONPath(currentPath)],
      };
    }
    return { differences, paths };
  }

  // Compare object keys
  for (const key in obj1) {
    if (!obj1.hasOwnProperty(key)) continue;

    const newPath = [...currentPath, key];
    const value1 = obj1[key];
    const value2 = obj2?.[key];

    // Key doesn't exist in obj2
    if (!(key in (obj2 || {}))) {
      differences[key] = value1;
      paths.push(formatJSONPath(newPath));
    }
    // Both values are objects, recurse
    else if (
      typeof value1 === "object" &&
      value1 !== null &&
      !Array.isArray(value1) &&
      typeof value2 === "object" &&
      value2 !== null &&
      !Array.isArray(value2)
    ) {
      const nestedResult = compareJSON(value1, value2, mode, newPath);
      if (Object.keys(nestedResult.differences).length > 0) {
        differences[key] = nestedResult.differences;
        paths.push(...nestedResult.paths);
      }
    }
    // Values exist but are different types or one is array
    else if (typeof value1 !== typeof value2 || Array.isArray(value1) !== Array.isArray(value2)) {
      // In template mode, if types differ, include the difference
      if (mode === "template") {
        differences[key] = value1;
        paths.push(formatJSONPath(newPath));
      }
    }
  }

  return { differences, paths };
}

/**
 * Deep merge two JSON objects
 * obj2 values take precedence over obj1 in case of conflicts
 */
export function mergeJSON(obj1: any, obj2: any): any {
  // Handle null/undefined cases
  if (obj1 === null || obj1 === undefined) return obj2;
  if (obj2 === null || obj2 === undefined) return obj1;

  // If either is not an object, return obj2 (it takes precedence)
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    Array.isArray(obj1) ||
    Array.isArray(obj2)
  ) {
    return obj2;
  }

  // Create a new object with all keys from both objects
  const result: Record<string, any> = { ...obj1 };

  for (const key in obj2) {
    if (!obj2.hasOwnProperty(key)) continue;

    // If key exists in both and both values are objects, recurse
    if (
      key in result &&
      typeof result[key] === "object" &&
      result[key] !== null &&
      !Array.isArray(result[key]) &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      !Array.isArray(obj2[key])
    ) {
      result[key] = mergeJSON(result[key], obj2[key]);
    } else {
      // Otherwise, obj2's value takes precedence
      result[key] = obj2[key];
    }
  }

  return result;
}

/**
 * Validate if a string is valid JSON
 */
export function isValidJSON(text: string): boolean {
  const result = parseJSON(text);
  return result.success;
}

/**
 * Pretty print JSON with indentation
 */
export function formatJSON(data: any, indent: number = 2): string {
  try {
    return JSON.stringify(data, null, indent);
  } catch (error) {
    return "";
  }
}
