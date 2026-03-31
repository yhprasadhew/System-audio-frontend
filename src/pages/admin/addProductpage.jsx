import { useState } from "react";

export default function AdminaddItem() {

  const [productKey, setProductKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("audio");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");

  function handleAddItem() {
    const newItem = {
      productKey,
      name,
      price,
      category,
      dimensions,
      description
    };

    console.log("Adding item:", newItem);

    // 🔄 Reset form
    setProductKey("");
    setName("");
    setPrice(0);
    setCategory("audio");
    setDimensions("");
    setDescription("");
  }

  return (        
    <div className="w-full h-screen flex flex-col items-center justify-start gap-4 p-6 bg-gray-100">
      
      <h1 className="text-2xl font-bold">Add Items</h1>

      <div className="w-[400px] bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">

        {/* Product Key */}
        <input 
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          type="text" 
          placeholder="Product Key" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Name */}
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder="Name" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Price */}
        <input 
          value={price === 0 ? "" : price}
          onChange={(e) =>
            setPrice(e.target.value === "" ? 0 : Number(e.target.value))
          }
          type="number" 
          placeholder="Price" 
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
          type="text" 
          placeholder="Dimensions" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Description */}
        <input 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text" 
          placeholder="Description" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        {/* Buttons */}
        <button 
          onClick={handleAddItem}
          className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition"
        >
          Add Item
        </button>

        <button 
          onClick={() => {
            setProductKey("");
            setName("");
            setPrice(0);
            setCategory("audio");
            setDimensions("");
            setDescription("");
          }}
          className="w-full bg-gray-500 text-white font-bold py-2 rounded hover:bg-red-500 transition"
        >
          Cancel
        </button> 

      </div>
    </div>
  );
}