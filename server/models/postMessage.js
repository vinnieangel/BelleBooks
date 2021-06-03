import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  rating: String,
  dateFinished: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("postMessage", postSchema);

export default PostMessage;
