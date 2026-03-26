import { MdBluetoothAudio } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";

export default function Adminpage() {
    
    return (
        <div className='w-full h-screen flex'>

      {/* Sidebar */}
      <div className='w-[260px] h-full bg-green-200 p-4 space-y-4'>

        {/* Dashboard */}
        <button className='w-full h-[60px] text-[22px] font-bold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'>
          <GoGraph /> Dashboard
        </button>

        {/* Bookings */}
        <button className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'>
          <FaBookOpen /> Bookings
        </button>

        {/* Items */}
        <button className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'>
          <IoBagCheckSharp /> Items
        </button>

        {/* Users */}
        <button className='w-full h-[50px] text-[18px] font-semibold flex items-center gap-3 px-4 rounded-lg hover:bg-green-300 transition'>
          <FaUserShield /> Users
        </button>

      </div>

      {/* Main Content */}
      <div className='flex-1 h-full bg-red-900 p-4'>
        <MdBluetoothAudio className='text-[35px] text-white' />
      </div>
      
    </div>
    )
}
