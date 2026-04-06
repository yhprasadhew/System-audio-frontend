import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminItempage() {

  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const token = localStorage.getItem("token");

  function fetchItems() {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log("Fetched items data:", res.data);
      res.data.forEach(item => {
        console.log(`Item ${item.name} (${item._id}): images =`, item.image);
      });
      setItems(res.data);
    })
    .catch((err) => console.error("Error fetching items:", err));
  }

  // ✅ Fetch data
  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ DELETE
  function handleDelete(id) {
    if (!window.confirm("Are you sure?")) return;

    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      alert("Deleted!");
      fetchItems(); // ✅ better than reload
    })
    .catch((err) => console.error(err));
  }

  // ✅ FILTER (search)
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ PAGINATION
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full h-full relative p-4">

      <h1 className="text-2xl font-bold mb-4">Items Page</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 TABLE */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Image</th>
            <th className="border p-2">Key</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedItems.map((item) => {
            console.log(`Rendering item: ${item.name} with images:`, item.image);
            return (
            <tr key={item._id} className="text-center">
              <td className="border p-2">
                <div className="flex gap-1 justify-center">
                  {item.image && Array.isArray(item.image) && item.image.length > 0 ? (
                    // Multiple images stored in 'image' array
                    item.image.slice(0, 3).map((img, idx) => {
                      console.log(`Rendering image for ${item.name}: ${img}`);
                      return (
                        <img
                          key={`${item._id}-${idx}`}
                          src={img}
                          alt={`${item.name} ${idx + 1}`}
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) => {
                            console.log(`Image failed to load for ${item.name}:`, img);
                            e.target.style.display = 'none';
                          }}
                        />
                      );
                    })
                  ) : item.image && !Array.isArray(item.image) ? (
                    // Single image (old format)
                    <img
                      key={`${item._id}-single`}
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mx-auto"
                      onError={(e) => {
                        console.log(`Image failed to load for ${item.name}:`, item.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    // No images
                    <div className="w-16 h-16 bg-gray-200 rounded mx-auto flex items-center justify-center text-xs text-gray-500">
                      No Images
                    </div>
                  )}
                </div>
              </td>
              <td className="border p-2">{item.productkey}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.price}</td>
              <td className="border p-2">{item.category}</td>

              <td className="border p-2 flex gap-2 justify-center">

                {/* ✏️ EDIT */}
                <Link to={`/admin/items/edit/${item._id}`}>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                </Link>

                {/* 🗑️ DELETE */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </td>
            </tr>
            );
          })}
        </tbody>
      </table>

      {/* 📄 PAGINATION */}
      <div className="absolute bottom-4 left-0 w-full flex gap-2 justify-center">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={startIndex + itemsPerPage >= filteredItems.length}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

      {/* ➕ ADD */}
      <Link to="add">
        <CiCirclePlus className="text-[50px] absolute right-3 bottom-3 cursor-pointer hover:text-green-500" />
      </Link>

    </div>
  );
}
//multiple images add by array