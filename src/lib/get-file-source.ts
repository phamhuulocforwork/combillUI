import { readFileSync } from 'node:fs';
import path from 'node:path';

export const getFileSource = (filePath: string) => {
  const fullPath = path.join(process.cwd(), 'src', filePath);
  const fileContent = readFileSync(fullPath, 'utf-8');

  const fileName = path.basename(fullPath);

  return {
    fileName,
    content: fileContent,
  };
};
