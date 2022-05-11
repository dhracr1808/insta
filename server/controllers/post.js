import { Post } from "../models/Post";

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
    const post = await Post.findByPk(req.params.id);
    if (!post) return next();
    res.json(post);
  } catch (error) {
    res.status.json({ message: error.message });
  }
};

export const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.json(newPost);
  } catch (error) {
    res.status.json({ message: error.message });
  }
};
