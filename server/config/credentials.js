import { EMAIL_USER, clientId, clientSecret } from "../config/config";
import { refreshToken, accessToken } from "../config/config";
import { cloud_name, api_key, api_secret } from "../config/config";

export const CredencialsMailer = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: EMAIL_USER,
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
  },
};

export const apiCloudinary = { cloud_name, api_key, api_secret, secure: false };
