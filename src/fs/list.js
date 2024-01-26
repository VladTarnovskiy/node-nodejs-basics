import { readdir } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const list = async () => {
  const initialFile = getPathToFile(import.meta.url, "files", "");

  try {
    if (!(await checkFileExist(initialFile))) {
      throw new Error("FS operation failed");
    }

    const files = await readdir(initialFile);
    files.forEach((file) => console.log(file));
  } catch (error) {
    console.log(error.message);
  }
};

await list();
