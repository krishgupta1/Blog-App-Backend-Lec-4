const express = require('express');
const router = express.Router();

const {dummyLink, likePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/CommentController");
const {createPost} = require("../controllers/PostController");
const {getAllPost} = require("../controllers/PostController");
const {unlikePost} = require("../controllers/likeController");

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts", getAllPost)
router.post("/likes/like", likePost)
router.post("/likes/unlike", unlikePost)

module.exports = router;
// 21-June-2023 no code today