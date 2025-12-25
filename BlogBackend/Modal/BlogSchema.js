const mongoose = require("mongoose");
const { Schema } = mongoose;

const commonSchema = {
  type: String,
  trim: true,
};

const BlogSchema = new Schema(
  {
    title: { ...commonSchema },
    description: { ...commonSchema, require: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
