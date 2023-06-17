const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        });
    }
    
    catch(error){
        return res.status(400).json({
            error : "Error while creating Post"
        });
    }
}
// need some more testing after completing like's controller

exports.getAllPost = async(req,res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
    }
    catch(error){
        return res.status(400).json({
            error : "Error while fetching Post"
        });
    }
}