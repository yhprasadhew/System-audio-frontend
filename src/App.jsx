import './app.css'
import { MdBluetoothAudio } from "react-icons/md";

function App() {
  return (
   <div className='w-full  h-screen flex '>
    <div className='w-[290px] h-full  bg-green-200'>
     <button className='w-full h-[60px]  text-[25px] font-bold'>Dashboard</button>
      <button className='w-full h-[40px] text-[20px] font-bold'>Items</button>
      <button className='w-full h-[4px] text-[20px] font-bold'>Reviews</button>
      

     </div>
     <div className='w-full h-full bg-red-900'>
      <MdBluetoothAudio className='text-[35px]' />
     </div>
     </div>
  )
}
export default App