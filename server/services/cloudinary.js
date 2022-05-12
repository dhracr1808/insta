import { v2 as cloudinary } from "cloudinary";
import { apiCloudinary } from "./../config";

cloudinary.config(apiCloudinary);

export const uploadFile = async (file) => {
  return await cloudinary.uploader.upload(file, { folder: "insta" });
};

export const deleteFile = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
