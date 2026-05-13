import Note from "../models/Note.js";

//upload notes
export const uploadNote = async (req, res) => {
  try {
    const { title, course, year, uploadType, subject, semester } = req.body;

    // File validation
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File not uploaded",
      });
    }

    // Required fields validation
    if (!title || !subject || !uploadType) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // PYQ validation
    if (uploadType === "PYQ") {
      if (!semester || !year || !course) {
        return res.status(400).json({
          success: false,
          message: "Course, Semester and Year are required for PYQ",
        });
      }
    }

    const noteData = {
      title,
      subject,
      uploadType,
      fileUrl: req.file.path,
      public_id: req.file.filename,
      uploadedBy: req.user.id,
    };

    // Add only for PYQ
    if (uploadType === "PYQ") {
      noteData.course = course;
      noteData.semester = semester;
      noteData.year = year;
    }

    const note = await Note.create(noteData);

    res.status(201).json({
      success: true,
      message: "Note uploaded successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const { type } = req.query;
    let filter = {};

    // Notes Page
    if (type === "notes") {
      filter.$or = [
        {
          uploadType: {
            $in: ["Class Notes", "Others"],
          },
        },

        {
          uploadType: {
            $exists: false,
          },
        },
      ];
    }

    // PYQ Page
    if (type === "pyq") {
      filter.uploadType = "PYQ";
    }

    const notes = await Note.find(filter)
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// latest notes
export const getLatestNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      $or: [
        {
          uploadType: {
            $in: ["Class Notes", "Others"],
          },
        },

        {
          uploadType: {
            $exists: false,
          },
        },
      ],
    })
      .sort({ createdAt: -1 })
      .limit(4)
      .populate("uploadedBy", "name");

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Logged In User Notes
export const getMyNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      uploadedBy: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

import cloudinary from "../config/cloudinary.js";

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    //check note exists
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    //check ownership
    if (note.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    //delete file from cloudinary
    await cloudinary.uploader.destroy(note.public_id, {
      resource_type: "raw",
    });
    //delete file from database
    await note.deleteOne();

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
