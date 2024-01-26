import { getPathToFile } from "../utils/pathToFile.js";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";

const decompress = async () => {
  const gzip = createUnzip();
  const sourceFile = getPathToFile(import.meta.url, "files", "archive.gz");
  const distFile = getPathToFile(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const readableStream = createReadStream(sourceFile);
  const writableStream = createWriteStream(distFile);

  await pipeline(readableStream, gzip, writableStream);
};

await decompress();
