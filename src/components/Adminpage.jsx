import { MdBluetoothAudio } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Adminpage() {

  const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex'>

      {/* Sidebar */}
      <div className='w-[260px] h-full bg-green-200 p-4 space-y-4'>

        {/* Dashboard */}
        <button 
          onClick={() => navigate('/admin')}
          className='w-full h-[60px] text-[22px] font-bold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <GoGraph /> Dashboard
        </button>

        {/* Bookings */}
        <button 
          onClick={() => navigate('/admin/booking')}
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaBookOpen /> Bookings
        </button>

        {/* Items */}
        <button 
          onClick={() => navigate('/admin/items')}
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <IoBagCheckSharp /> Items
        </button>

        {/* Users */}
        <button 
          onClick={() => navigate('/admin/users')}
          className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'
        >
          <FaUserShield /> Users
        </button>

      </div>

      {/* Main Content */}
      <div className='flex-1 w-[calc(100vw-260px)] h-full bg-red-900 p-4'>
        
        <Routes>
          <Route path="booking" element={<h1>Booking Page</h1>} />
          <Route path="items" element={<h1>Items Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          
        </Routes>

       
      </div>
      
    </div>
  )
}