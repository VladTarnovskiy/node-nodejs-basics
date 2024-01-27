import { readFile } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const read = async () => {
  const initialFile = getPathToFile(import.meta.url, "files", "fileToRead.txt");

  try {
    if (!(await checkFileExist(initialFile))) {
      throw new Error("FS operation failed");
    }

    const data = await readFile(initialFile, { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

await read();
