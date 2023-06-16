const express = require('express');
const router = express.Router();

const {dummyLink} = require("../controllers/LikeController")
const {createComment} = require("../controllers/CommentController")

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment)

module.exports = router;