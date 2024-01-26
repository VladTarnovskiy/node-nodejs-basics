import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { getPathToFile } from "../utils/pathToFile.js";

const calculateHash = async () => {
  const file = getPathToFile(
    import.meta.url,
    "files",
    "fileToCalculateHashFor.txt"
  );

  const hash = createHash("sha256");

  const input = createReadStream(file);
  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(hash.digest("hex"));
    }
  });
};
await calculateHash();
