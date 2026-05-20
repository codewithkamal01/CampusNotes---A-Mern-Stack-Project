import supabase from "../config/supabase.js";
import Note from "../models/Note.js";
// Upload Note
export const uploadNote = async (req, res) => {
  try {
    const {
      title,
      course,
      year,
      uploadType,
      subject,
      semester,
      fileUrl,
      filePath,
    } = req.body;

    // Required fields validation
    if (!title || !subject || !uploadType || !fileUrl || !filePath) {
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

    // Note Data
    const noteData = {
      title,
      subject,
      uploadType,
      fileUrl,
      filePath,
      uploadedBy: req.user.id,
    };

    // Add PYQ fields
    if (uploadType === "PYQ") {
      noteData.course = course;
      noteData.semester = semester;
      noteData.year = year;
    }

    // Save to DB
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

// Latest Notes
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

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    // Check note exists
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Check ownership
    if (note.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    // Delete file from Supabase
    const { error } = await supabase.storage
      .from("notes")
      .remove([note.filePath]);

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete file from storage",
      });
    }

    // Delete DB record
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
