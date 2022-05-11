import { EMAIL_USER, clientId, clientSecret } from "../config/config";
import { refreshToken, accessToken } from "../config/config";

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
