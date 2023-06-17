
const Post = require("../models/postModel")
const Like = require("../models/likeModel")


exports.dummyLink = (req, res) => {
    res.send("This is your Dummy Page");
}