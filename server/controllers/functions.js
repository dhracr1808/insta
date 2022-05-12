import { uploadFile, deleteFile } from "../services";
import fs from "fs-extra";
export const allPromises = async (files, action = "upload") => {
  if (action === "upload") {
    return await Promise.all(
      files.map(async ({ tempFilePath }) => {
        const { public_id, secure_url } = await uploadFile(tempFilePath);
        await fs.remove(tempFilePath);
        return { public_id, secure_url };
      })
    );
  }
  if (action === "delete") {
    return await Promise.all(
      files.map(async ({ public_id }) => {
        await deleteFile(public_id);
      })
    );
  }
};

export const onePromise = async ({ tempFilePath }) => {
  const { public_id, secure_url } = await uploadFile(tempFilePath);
  await fs.remove(tempFilePath);
  return [{ public_id, secure_url }];
};
