import { writeFile } from "node:fs/promises";
import { getPathToFile } from "../utils/pathToFile.js";

const create = async () => {
  try {
    const fileUrl = getPathToFile(import.meta.url, "files", "fresh.txt");
    const data = "I am fresh and young";
    await writeFile(fileUrl, data);
  } catch (err) {
    console.error(err);
  }
};

await create();
