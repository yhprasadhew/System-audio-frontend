import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[100px] shadow-xl flex items-center justify-between px-10 bg-white">

      {/* Logo */}
      <img 
        src="/logo.jpg" 
        alt="Logo" 
        className="h-20 w-20 object-cover rounded-full border-2 border-gray-300"
      />

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6">
        <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        <Link to="/items" className="text-gray-600 hover:text-gray-800">Items</Link>
        <Link to="/help" className="text-gray-600 hover:text-gray-800">Help</Link>
      </div>

    </header>
  )
}