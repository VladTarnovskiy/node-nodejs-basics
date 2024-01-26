import { access, constants } from "node:fs/promises";

export const checkFileExist = async (pathToFile) => {
  try {
    await access(pathToFile, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
