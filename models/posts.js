const mongoose = require('mongoose'),
      { Schema } = mongoose;
      

const postsSchema = new Schema({
    comments: {
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
    // posts: [posts collection]
    // Create a post collection schema
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;