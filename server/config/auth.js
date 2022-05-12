import { EMAIL_USER } from "./../config/config";
export const auth = {};
auth.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "inicia session" });
};

auth.isAdmin = (req, res, next) => {
  const message = "ruta no existe";
  if (!req.isAuthenticated()) return res.status(401).json({ message });
  const { email } = req.user;
  if (email !== EMAIL_USER) return res.status(401).json({ message });
  next();
};
