import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIsExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("https");
}

export function formatBytes(
  bytes: number,
  opts: {
    decimals?: number;
    sizeType?: "accurate" | "normal";
  } = {},
) {
  const { decimals = 0, sizeType = "normal" } = opts;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate"
      ? (accurateSizes[i] ?? "Bytest")
      : (sizes[i] ?? "Bytes")
  }`;
}

function indentContent(content: string, indent: string = "      "): string {
  return content
    .split("\n")
    .map((line) => indent + line)
    .join("\n");
}

export function htmlToJsx(
  html: string = "",
  componentName: string = "HtmlComponent",
): string {
  const toCamelCase = (str: string): string =>
    str.replace(/-([a-z])/g, (g: string) => g[1]?.toUpperCase() || "");

  const jsxContent: string = html
    .replace(/class=/g, "className=")
    .replace(/for=/g, "htmlFor=")
    .replace(
      /([a-zA-Z-]+)=/g,
      (match: string, p1: string) => `${toCamelCase(p1)}=`,
    );

  const jsxContentIndented: string = indentContent(jsxContent);
  const component: string = `import React from 'react';

const ${componentName} = () => {
  return (
    <>
${jsxContentIndented}
    </>
  );
};

export default ${componentName};
`;
  return html.length > 0 ? component : "";
}
