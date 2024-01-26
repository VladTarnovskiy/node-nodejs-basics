import { unlink } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const remove = async () => {
  const initialFile = getPathToFile(
    import.meta.url,
    "files",
    "fileToRemove.txt"
  );

  try {
    if (!(await checkFileExist(initialFile))) {
      throw new Error("FS operation failed");
    }

    await unlink(initialFile);
  } catch (error) {
    console.log(error.message);
  }
};

await remove();
