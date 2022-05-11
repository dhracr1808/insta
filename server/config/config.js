import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4001;
export const DBNAME = process.env.DBNAME;
export const DBUSERNAME = process.env.DBUSERNAME;
export const DBPASSWORD = process.env.DBPASSWORD;
export const clientId = process.env.clientId;
export const clientSecret = process.env.clientSecret;
export const refreshToken = process.env.refreshToken;
export const accessToken = process.env.accessToken;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const EMAIL_USER = process.env.EMAIL_USER;
