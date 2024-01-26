import { getPathToFile } from "../utils/pathToFile.js";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

const compress = async () => {
  const gzip = createGzip();
  const sourceFile = getPathToFile(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const distFile = getPathToFile(import.meta.url, "files", "archive.gz");
  const readableStream = createReadStream(sourceFile);
  const writableStream = createWriteStream(distFile);

  await pipeline(readableStream, gzip, writableStream);
};

await compress();
