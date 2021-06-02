import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  rating: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("postMessage", postSchema);

export default PostMessage;
