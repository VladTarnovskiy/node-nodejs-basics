import { cp } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const copy = async () => {
  const sourceDir = getPathToFile(import.meta.url, "files", "");
  const distDir = getPathToFile(import.meta.url, "files_copy", "");

  try {
    if ((await checkFileExist(distDir)) || !(await checkFileExist(sourceDir))) {
      throw new Error("FS operation failed");
    }

    await cp(sourceDir, distDir, { recursive: true });
  } catch (error) {
    console.log(error.message);
  }
};

await copy();
