import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    googleId: String,
    avatar: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
