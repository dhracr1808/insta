import { createMail } from "../services/mailer";
import { Post, User } from "../models";
import { findPost } from "./functions";
import { generateToken } from "../config/token";
import { mailActive, mailRestore } from "../views/mails";
import passport from "passport";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return next();
    res.json(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(404).json({ message: "email is required" });
    const user = await User.create({ email, password });
    const token = generateToken({ email });
    await createMail(mailActive(email, token));
    res.json(user);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.send("error, es necesario un email");
    const token = generateToken({ email });
    await createMail(mailRestore(email, token));
    res.send({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const authenticate = (req, res, next) => {
  passport.authenticate("local", { session: true }, (err, user, info) => {
    if (err) return res.status(500).json(err);
    req.login(user, { session: true }, (err) => {
      if (err) return res.json(info);
      if (!user.active) return res.json({ message: user.email });
      res.sendStatus(200);
    });
  })(req, res, next);
};

export const activeAcount = async (req, res) => {
  try {
    const { email } = req.user;
    await User.update({ active: true }, { where: { email } });
    res.redirect("./me");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const profile = (req, res) => {
  try {
    const message = req.user.email;
    if (!req.user.active) return res.status(401).send({ message });
    return res.send(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { email } = req.user;
    const { password } = req.body;
    const user = await User.findOne({ where: { email } });
    user.changePassword(password);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const onePostsUser = async (req, res) => {
  try {
    const post = findPost(req.data, req.params.id);
    if (!post) return res.status(404).json({ message: "post no existe" });
    res.send(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const googleAuth = passport.authenticate("google", {
  scope: ["email", "profile"],
});

export const googleCallback = passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/api/users/me",
});
