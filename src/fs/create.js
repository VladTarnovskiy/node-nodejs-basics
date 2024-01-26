import { writeFile } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";
import { checkFileExist } from "../utils/checkFileExist.js";

const create = async () => {
  const fileUrl = getPathToFile(import.meta.url, "files", "fresh.txt");
  const data = "I am fresh and young";

  try {
    if (await checkFileExist(fileUrl)) {
      throw new Error("FS operation failed");
    }
    await writeFile(fileUrl, data);
  } catch (err) {
    console.error(err);
  }
};

await create();
