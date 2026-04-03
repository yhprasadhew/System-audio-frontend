// src/components/Testing.jsx
import { useState } from "react";
import MediaUpload from "../utils/mediaupload";

export default function Testing() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const url = await MediaUpload(file);

    if (url) {
      alert("Upload success ✅");
      console.log("Uploaded file URL:", url);
    } else {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-3xl font-bold text-center mt-10">Testing Page</h1>

      <input
        type="file"
        onChange={handleFileChange}
        className="block mx-auto mt-6"
      />

      <button
        onClick={uploadFile}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block mx-auto"
      >
        Upload
      </button>
    </div>
  );
}