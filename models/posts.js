const mongoose = require('mongoose'),
      { Schema } = mongoose;
      

const postsSchema = new Schema({
    posts: {
        type: String,
        required: false,
    },
    totalBolts: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    comments: {
        type: String,
        required: false,
    },
    
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;