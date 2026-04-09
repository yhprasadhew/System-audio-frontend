import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import MediaUpload from "../../utils/mediaupload";

export default function AdminUpdateItem() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productKey, setProductKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("audio");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // ✅ Fetch product
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        const product = res.data;

        setProductKey(product.productkey);
        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);
        setDimensions(product.dimensions);
        setDescription(product.description);

        // ✅ IMPORTANT: keep URLs as-is
        setProductImages(product.image || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch product");
      }
    };

    fetchProductData();
  }, [id]);

  // ✅ Update item
  async function handleUpdateItem() {
    if (!productKey || !name || !dimensions) {
      toast.error("Please fill all required fields");
      return;
    }

    if (price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    if (!productImages || productImages.length === 0) {
      toast.error("Add at least one image");
      return;
    }

    setIsUploading(true);

    const imageUrls = [];

    try {
      // ✅ FIX: handle both URL + File
      for (const image of productImages) {
        if (typeof image === "string") {
          imageUrls.push(image); // already uploaded
        } else {
          const url = await MediaUpload(image);
          if (!url) {
            toast.error(`Failed to upload ${image.name}`);
            setIsUploading(false);
            return;
          }
          imageUrls.push(url);
        }
      }

      const updatedItem = {
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

      console.log("Updating:", updatedItem); // debug

      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
        updatedItem,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      toast.success("Item updated successfully!");
      navigate("/admin/items");

    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Update failed");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Update Item</h1>

      <div className="w-[400px] bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">

        <input
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          placeholder="Product Key"
          className="input"
        />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input"
        />

        <input
          value={price === 0 ? "" : price}
          type="number"
          min="0"
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          className="input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        >
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="accessories">Accessories</option>
        </select>

        <input
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
          placeholder="Dimensions"
          className="input"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="input"
        />

        {/* ✅ Image Upload */}
        <input
          type="file"
          multiple
          onChange={(e) =>
            setProductImages([
              ...productImages,
              ...Array.from(e.target.files)
            ])
          }
        />

        {/* ✅ Preview FIXED */}
        <div className="flex gap-2 flex-wrap">
          {productImages.map((img, i) => (
            <img
              key={i}
              src={typeof img === "string" ? img : URL.createObjectURL(img)}
              className="w-16 h-16 object-cover border rounded"
            />
          ))}
        </div>

        <button
          onClick={handleUpdateItem}
          disabled={isUploading}
          className="bg-green-500 text-white p-2 rounded"
        >
          {isUploading ? "Updating..." : "Update Item"}
        </button>

        <button
          onClick={() => navigate("/admin/items")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}