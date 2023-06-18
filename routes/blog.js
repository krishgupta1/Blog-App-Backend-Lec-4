const express = require('express');
const router = express.Router();

const {dummyLink, likePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost} = require("../controllers/PostController");
const {getAllPost} = require("../controllers/PostController");

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts", getAllPost)
router.post("/likes/like", likePost)

module.exports = router;