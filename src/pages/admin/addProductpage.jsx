import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MediaUpload from "../../utils/mediaupload";

//navigate hook
export default function AdminaddItem() {

   const navigate = useNavigate();

  const [productKey, setProductKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("audio");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  async function handleAddItem() {

    // ✅ validation
    if (!productKey || !name || !dimensions) {
      toast.error("Please fill all required fields");
      return;
    }

    if (price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    if (!productImages || productImages.length === 0) {
      toast.error("Please select at least one product image");
      return;
    }

    setIsUploading(true);

    // Upload all images
    const imageUrls = [];
    for (const image of productImages) {
      const url = await MediaUpload(image);
      if (!url) {
        toast.error(`Failed to upload ${image.name}. Please try again.`);
        setIsUploading(false);
        return;
      }
      imageUrls.push(url);
    }

    // ✅ FIXED: match backend (productkey)
    const newItem = {
      productkey: productKey,
      name,
      price,
      category,
      dimensions,
      description,
      image: imageUrls
    };

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first!");
      setIsUploading(false);
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, newItem, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success(" Item added successfully!");
      navigate("/admin/items"); // FIXED: navigate after success 

      // ✅ reset AFTER success
      setProductKey("");
      setName("");
      setPrice(0);
      setCategory("audio");
      setDimensions(""); 
      setDescription("");
      setProductImages([]);

    } catch (error) {
      console.error("ERROR:", error.response?.data || error.message);
      toast.error("Failed to add item. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  return (        
    <div className="w-full h-screen flex flex-col items-center gap-4 p-6 bg-gray-100">
      
      <h1 className="text-2xl font-bold">Add Items</h1>

      <div className="w-[400px] bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">

        {/* Product Key */}
        <input 
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          placeholder="Product Key"
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Name */}
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Price */}
        <input 
          value={price === 0 ? "" : price}
          onChange={(e) => {
            const value = e.target.value;
            if (value < 0) return;
            setPrice(value === "" ? 0 : Number(value));
          }}
          type="number"
          placeholder="Price"
          min="0"
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Category */}
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border-2 border-gray-300 p-2 rounded"
        >
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* Dimensions */}
        <input 
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
          placeholder="Dimensions"
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Description */}
        <input 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Product Images */}
        <div className="flex flex-col gap-2">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setProductImages(Array.from(e.target.files))}
            className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
          />
          {productImages.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {productImages.map((image, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt={`Preview ${idx + 1}`} 
                    className="w-16 h-16 object-cover rounded border"
                  />
                  <span className="text-xs text-gray-600">{image.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Button */}
        <button 
          onClick={handleAddItem}
          disabled={isUploading}
          className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isUploading ? "Uploading..." : "Add Item"}
        </button>

        {/* Cancel Button */}
        <button 
          onClick={() => {
            navigate("/admin/items"); // FIXED: navigate back to items page
          }}
          className="w-full bg-gray-500 text-white font-bold py-2 rounded hover:bg-red-500 transition"
        >
          Cancel
        </button> 

      </div>
    </div>
  );
}