import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { getPathToFile } from "../utils/pathToFile.js";

const read = async () => {
  const file = getPathToFile(import.meta.url, "files", "fileToRead.txt");
  const readableStream = createReadStream(file);
  readableStream.pipe(stdout);
};

await read();
