import Note from "../models/Note.js";

//upload notes
export const uploadNote = async (req, res) => {
  try {
    const { title, course, year, uploadType, subject, semester } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "File not uploaded",
      });
    }

    const note = await Note.create({
      title,
      subject,
      course,
      semester,
      year,
      uploadType,
      fileUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      message: "Note uploaded successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({
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
      uploadedBy: req.user._id,
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
