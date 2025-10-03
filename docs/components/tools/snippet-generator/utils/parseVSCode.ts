import { html } from "common-tags";

const parseVSCode = (
  description: string,
  tabtrigger: string,
  snippet: string,
) => {
  // Normalize line breaks
  const normalizedSnippet = snippet.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  // Split into lines
  const lines = normalizedSnippet.split("\n");
  // Remove trailing empty lines
  while (lines.length > 0 && lines[lines.length - 1]!.trim() === "") {
    lines.pop();
  }
  // Escape backslashes and quotes in each line
  const escapedLines = lines.map((line) =>
    line.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
  );
  // Format lines for JSON
  const formattedLines = escapedLines.map((line, index) =>
    index === escapedLines.length - 1 ? `"${line}"` : `"${line}",`,
  );
  // prettier-ignore
  return html`
    "${description}": {
      "prefix": "${tabtrigger}",
      "body": [
        ${formattedLines.join('\n')}
      ],
      "description": "${description}"
    }
  `;
};

export default parseVSCode;
