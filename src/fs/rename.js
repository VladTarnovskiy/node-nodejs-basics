import fs from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const rename = async () => {
  const initialFile = getPathToFile(
    import.meta.url,
    "files",
    "wrongFilename.txt"
  );
  const changedFile = getPathToFile(
    import.meta.url,
    "files",
    "properFilename.md"
  );

  try {
    if (
      (await checkFileExist(changedFile)) ||
      !(await checkFileExist(initialFile))
    ) {
      throw new Error("FS operation failed");
    }

    await fs.rename(initialFile, changedFile);
  } catch (error) {
    console.log(error.message);
  }
};

await rename();
