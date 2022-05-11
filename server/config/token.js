import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "./config";

export const generateToken = (user) => {
  return jwt.sign(user, TOKEN_SECRET, { expiresIn: "10d" });
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"] || req.query.token;
    if (!token) return res.status(401).json({ message: "se requiere token" });
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) return res.status(401).json({ message: err });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
