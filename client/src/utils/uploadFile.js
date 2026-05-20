import { supabase } from "../lib/supabase";

export const uploadFile = async (file) => {
  try {
    // Allowed file types
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      throw new Error("Only PDF, DOC and DOCX files are allowed");
    }

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("File size should be under 10MB");
    }

    const fileExt = file.name.split(".").pop();

    // Better unique filename
    const fileName = `uploads/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    // Upload to Supabase
    const { error } = await supabase.storage
      .from("notes")
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    // Get public URL
    const { data } = supabase.storage.from("notes").getPublicUrl(fileName);

    return {
      fileUrl: data.publicUrl,
      filePath: fileName,
    };
  } catch (error) {
    console.log(error);

    throw error;
  }
};
