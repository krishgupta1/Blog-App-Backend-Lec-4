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
            (post, {$push: {likes: savedLike._id}}, {new: true})
            .populate("likes").exec();
        res.json({
            post: updatePost, 
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

// Unlike a Post

exports.unlikePost = async (req, res) => {
    try {
        const{post, like} = req.body;
        // find and delete the like from collection
        const deleteLike = await Like.findOneAndDelete({post:post, _id:like});
        const updatePost = await Post.findByIdAndDelete(post, {$pull: {likes: deletedLike._id}}, {new: true});

        res.json({
            post : updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.dummyLink = (req, res) => {
    res.send("This is your Dummy Page");
} 
// nothing committed today