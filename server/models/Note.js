import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    semester: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    uploadType: {
      type: String,
      enum: ["Class Notes", "PYQ", "All"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Note", noteSchema);
