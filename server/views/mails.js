import { template, templeteRestore, templeteActive } from "./html";

export const mailActive = (email, token) => {
  return {
    from: `instapp acceso a tu cuenta <diegohuarcayarojas@gmail.com>`,
    to: `${email}`,
    subject: `test sin finaly emails este mail va dirigido para ${email}`,
    html: template(email, token, templeteActive),
  };
};

export const mailRestore = (email, token) => {
  return {
    from: `instapp acceso a tu cuenta <diegohuarcayarojas@gmail.com>`,
    to: `${email}`,
    subject: `test sin finaly emails este mail va dirigido para ${email}`,
    html: template(email, token, templeteRestore),
  };
};
