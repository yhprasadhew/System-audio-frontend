import { useState } from "react";
export default function AdminaddItem() {
  const [productKey, setProductKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("audio");
  const [dimensions, setDimensions] = useState("");
  const [description, setDescription] = useState("");

  return (        
    <div className="w-full h-screen flex flex-col items-center justify-start gap-4 p-6 bg-gray-100">
      
      <h1 className="text-2xl font-bold flex items-center gap-2">
        Add Items
      </h1>

      <div className="w-[400px] bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">

        <input 
          onChange={(e) => setProductKey(e.target.value)}
          type="text" 
          placeholder="product key" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

<input 
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder="Name" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />
        <input 
          onChange={(e) => setPrice(e.target.value)}
          type="text" 
          placeholder="Price" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />
        <select 
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
  <option key ="audio" value="audio">Audio</option>
  <option key ="video" value="video">Video</option>
  <option key ="accessories" value="accessories">Accessories</option>
</select>
        <input 
          onChange={(e) => setDimensions(e.target.value)} 
          type="text" 
          placeholder="Dimensions" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />


        <input 
          onChange={(e) => setDescription(e.target.value)}
          type="text" 
          placeholder="Description" 
          className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
        />

        

        

        <button className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition">
          Add Item
        </button>
        <button className="w-full bg-gray-500 text-white font-bold py-2 rounded hover:bg-red-500 transition">
          Cancel
        </button> 

      </div>

    </div>
  );
}