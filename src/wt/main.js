import { getPathToFile } from "../utils/pathToFile.js";
import { Worker } from "node:worker_threads";
import os from "node:os";

function getWorker(digit) {
  const pathToWorker = getPathToFile(import.meta.url, "", "worker.js");
  return new Promise((resolve, reject) => {
    const worker = new Worker(pathToWorker, { workerData: digit });

    worker.on("message", (result) => resolve(result));

    worker.on("error", (error) => reject(error));
  });
}

const performCalculations = async () => {
  const cpuData = os.cpus();
  const workers = cpuData.map((_, index) => getWorker(10 + index));
  const workersResults = await Promise.allSettled(workers);

  const resultData = workersResults.map(({ status, value }) =>
    status === "fulfilled"
      ? { status: "resolved", data: value }
      : { status: "error", data: null }
  );

  console.log(resultData);
};

await performCalculations();
