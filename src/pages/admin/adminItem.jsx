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

  // ✅ Fetch data
  useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems() {
    axios.get("http://localhost:3000/api/products", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => setItems(res.data))
    .catch((err) => console.error(err));
  }

  // ✅ DELETE
  function handleDelete(id) {
    if (!window.confirm("Are you sure?")) return;

    axios.delete(`http://localhost:3000/api/products/${id}`, {
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
            <th className="border p-2">Key</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedItems.map((item) => (
            <tr key={item._id} className="text-center">
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
          ))}
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