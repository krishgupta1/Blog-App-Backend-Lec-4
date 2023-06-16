const Post = require("../models/postModel");
const Comment = require("../models/CommentModel");


exports.createComment = async(req, res) => {
    try{
        //fetch data from request body
        const {post, user, body} = req.body;
        const comment = new Comment ({
            post,user, body
        });

        // save the comment into the database
        const savedComment = await comment.save();

        // find the POst using ID add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments: savedComment._id}}, {new: true})
                    .populate("comments") //populate the comment array with comment document
                    .exec();
        res.json({
            post : updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error : "Error While Creating Comment."
        })
    }
}