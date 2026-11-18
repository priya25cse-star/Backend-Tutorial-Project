
import express from "express";

import {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
} from "../controllers/post.controller.js";

const router = express.Router();

// CREATE POST
router.post("/", createPost);

// GET ALL POSTS
router.get("/", getPosts);

// GET SINGLE POST
router.get("/:id", getPost);

// UPDATE POST
router.put("/:id", updatePost);

// DELETE POST
router.delete("/:id", deletePost);

export default router;
