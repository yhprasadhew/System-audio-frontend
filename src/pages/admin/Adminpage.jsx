import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

import AdminaddItem from "./addProductpage";
import AdminItempage from "./adminItem";

export default function Adminpage() {
  return (
    <div className='w-full h-screen flex'>

      {/* Sidebar */}
      <div className='w-[260px] h-full bg-green-200 p-4 space-y-4'>

        <Link 
          to="/admin"
          className='w-full h-[60px] text-[22px] font-bold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <GoGraph /> Dashboard
        </Link>

        <Link 
          to="/admin/booking"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaBookOpen /> Bookings
        </Link>

        <Link 
          to="/admin/items"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <IoBagCheckSharp /> Items
        </Link>

        <Link 
          to="/admin/users"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaUserShield /> Users
        </Link>

      </div>

      {/* Main Content */}
      <div className='flex-1 w-[calc(100vw-260px)] h-full bg-gray-100 p-4'>
        
        <Routes>

          {/* ✅ FIX: default admin page */}
          <Route index element={<h1 className="text-gray-800 text-2xl">Dashboard Page</h1>} />

          <Route path="booking" element={<h1 className="text-gray-800 text-2xl">Booking Page</h1>} />

          {/* ✅ FIX: nested routing */}
          <Route path="items">
            <Route index element={<AdminItempage />} />
            <Route path="add" element={<AdminaddItem />} />
          </Route>

          <Route path="users" element={<h1 className="text-gray-800 text-2xl">Users Page</h1>} />

        </Routes>

      </div>
      
    </div>
  );
}