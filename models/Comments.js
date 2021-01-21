//same as "notes" in activity 15- changed from note to comments
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  title: String,
  body: String
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
