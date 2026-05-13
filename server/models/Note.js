import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    course: {
      type: String,
    },

    subject: {
      type: String,
      required: true,
    },

    semester: {
      type: String,
    },

    year: {
      type: Number,
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
      enum: ["Class Notes", "PYQ", "Others"],
      required: true,
    },

    public_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
