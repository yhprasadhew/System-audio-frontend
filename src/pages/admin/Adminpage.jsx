import { MdBluetoothAudio } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { Routes, Route, Link } from "react-router-dom";

export default function Adminpage() {

  return (
    <div className='w-full h-screen flex'>

      {/* Sidebar */}
      <div className='w-[260px] h-full bg-green-200 p-4 space-y-4'>

        {/* Dashboard */}
        <Link 
          to="/admin"
          className='w-full h-[60px] text-[22px] font-bold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <GoGraph /> Dashboard
        </Link>

        {/* Bookings */}
        <Link 
          to="/admin/booking"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaBookOpen /> Bookings
        </Link>

        {/* Items */}
        <Link 
          to="/admin/items"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <IoBagCheckSharp /> Items
        </Link>

        {/* Users */}
        <Link 
          to="/admin/users"
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaUserShield /> Users
        </Link>

      </div>

      {/* Main Content */}
      <div className='flex-1 w-[calc(100vw-260px)] h-full bg-red-900 p-4'>
        
        <Routes>
          <Route path="/" element={<h1 className="text-white text-2xl">Dashboard Page</h1>} />
          <Route path="booking" element={<h1 className="text-white text-2xl">Booking Page</h1>} />
          <Route path="items" element={<h1 className="text-white text-2xl">Items Page</h1>} />
          <Route path="users" element={<h1 className="text-white text-2xl">Users Page</h1>} />
        </Routes>

        

      </div>
      
    </div>
  )
}