import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { getPathToFile } from "../utils/pathToFile.js";

const write = async () => {
  const file = getPathToFile(import.meta.url, "files", "fileToWrite.txt");
  const writableStream = createWriteStream(file);
  stdin.pipe(writableStream);
};

await write();
