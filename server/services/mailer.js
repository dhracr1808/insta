import nodemailer from "nodemailer";
import { CredencialsMailer } from "../config";

const transporter = nodemailer.createTransport(CredencialsMailer);

transporter
  .verify()
  .then(() => console.log("preparado para enviar email"))
  .catch(console.log);

export const createMail = async (details) => {
  await transporter.sendMail(details);
};
