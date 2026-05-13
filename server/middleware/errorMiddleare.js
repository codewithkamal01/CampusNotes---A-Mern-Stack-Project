const errorMiddleware = (err, req, res, next) => {
  // Multer file size error
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File size exceeds 10MB limit",
    });
  }

  // Multer invalid file type
  if (err.message === "Only PDF/DOC/DOCX files allowed") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: err.message || "Server Error",
  });
};

export default errorMiddleware;
