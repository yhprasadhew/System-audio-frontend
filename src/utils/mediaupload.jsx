// src/utils/mediaupload.jsx
import { supabase } from "../supabaseClient";

export default async function MediaUpload(file) {
  if (!file) return null;

  try {
    const fileName = `${Date.now()}-${file.name}`;

    // Upload file
    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.log("Upload error:", error.message);
      return null;
    }

    // Get public URL
    const { data } = supabase.storage.from("images").getPublicUrl(fileName);

    console.log("Public URL:", data.publicUrl);
    return data.publicUrl;

  } catch (err) {
    console.log("Unexpected error:", err);
    return null;
  }
}