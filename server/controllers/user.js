import { User } from "../models/User";

export const getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};

export const getUser = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return next();
  res.json(user);
};

export const createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
};
