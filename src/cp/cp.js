import { fork } from "node:child_process";
import { getPathToFile } from "../utils/pathToFile.js";
import { error } from "node:console";

const spawnChildProcess = async (args) => {
  const pathToWorker = getPathToFile(import.meta.url, "files", "script.js");
  fork(pathToWorker, args);
};

spawnChildProcess(["R", "S", "S", "C", "H", "O", "O", "l"]);
