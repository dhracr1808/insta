import { Post, User } from "../models";
import fs from "fs-extra";
import { allPromises as promAll, onePromise as promOne } from "./";
import { routeNext } from "./functions";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status.json({ message: error.message });
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: {
        model: User,
        as: "user",
        attributes: ["id", "name", "email", "active", "admin", "image"],
      },
    });
    if (!post) return next();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const posts = await Post.findAll({ where: { userId: id } });
    if (req.params.id) return routeNext(req, res, next, posts);
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const files = req.files?.image;
    let image = null;
    if (files) image = files[0] ? await promAll(files) : await promOne(files);
    const newPost = await Post.create({ ...req.body, image });
    await newPost.setUser(req.user.id);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "post no existe" });
    if (post.image) await promAll(post.image, "delete");
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
