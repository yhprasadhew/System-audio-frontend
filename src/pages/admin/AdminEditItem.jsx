import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminEditItem() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [productKey, setProductKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  // ✅ Load product data
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      const item = res.data;

      setProductKey(item.productkey);
      setName(item.name);
      setPrice(item.price);
      setCategory(item.category);
      setDimensions(item.dimensions);
      setDescription(item.description);
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to load product");
    });
  }, [id]);

  // ✅ Update product
  async function handleUpdate() {
    try {
      await axios.put(
        `http://localhost:3000/api/products/${id}`,
        {
          productkey: productKey,
          name,
          price,
          category,
          dimensions,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Product updated!");
      navigate("/admin/items");

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="w-[400px] bg-white p-6 rounded shadow flex flex-col gap-3">

        <h1 className="text-xl font-bold text-center">Edit Product</h1>

        <input value={productKey} onChange={(e) => setProductKey(e.target.value)} placeholder="Product Key" className="border p-2 rounded" />
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />

        <input 
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number"
          className="border p-2 rounded"
        />

        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="border p-2 rounded" />
        <input value={dimensions} onChange={(e) => setDimensions(e.target.value)} placeholder="Dimensions" className="border p-2 rounded" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2 rounded" />

        <button 
          onClick={handleUpdate}
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Update
        </button>

        <button 
          onClick={() => navigate("/admin/items")}
          className="bg-gray-400 text-white py-2 rounded hover:bg-red-500"
        >
          Cancel
        </button>

      </div>
    </div>
  );
}