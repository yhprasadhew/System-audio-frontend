import { useState } from "react";

export default function Testing() {
  const [file, setFile] = useState(null);

function uploadFile() {
  console.log("Uploading file:", file);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };    

    return (    
        <div className="w-full h-screen">
            <h1 className="text-3xl font-bold text-center mt-10">Testing Page</h1> 

            <input type="file" onChange={(e) => {setFile(e.target.files[0])}} className="block mx-auto mt-6" />
            <button  onClick={uploadFile} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Upload</button>
        </div> 
    );
}