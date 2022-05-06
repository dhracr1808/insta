import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 4001;

export const DBNAME = process.env.DBNAME;
export const DBUSERNAME = process.env.DBUSERNAME;
export const DBPASSWORD = process.env.DBPASSWORD;
