import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const getPathToFile = (urlToFile, folderName, fileName) => {
  const __fileName = fileURLToPath(urlToFile);
  const __dirName = dirname(__fileName);
  const pathToFile = join(__dirName, folderName, fileName);
  return pathToFile;
};
