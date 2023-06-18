//import models

const Post = require("../models/postModel")
const Like = require("../models/likeModel")

// Like a Post

exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body
        const like = new Like({
            post,user
        });
        const savedLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate
            (post, {$push: {likes: savedLike._id} }, {new: true})
            // .populate("likes").exec();
        res.json({
            post: updatePost, 
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
} 

exports.dummyLink = (req, res) => {
    res.send("This is your Dummy Page");
} 
// nothing committed today