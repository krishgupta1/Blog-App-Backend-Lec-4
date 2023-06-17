const express = require('express');
const router = express.Router();

const {dummyLink} = require("../controllers/LikeController")
const {createComment} = require("../controllers/CommentController")
const {createPost} = require("../controllers/PostController")
const {getAllPost} = require("../controllers/PostController")

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)
router.post("/post/create", createPost)
router.get("/post", getAllPost)

module.exports = router;