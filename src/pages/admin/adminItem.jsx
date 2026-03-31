import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItempage() {
  return (
    <div className="w-full h-full relative">

      <h1 className="text-2xl font-bold">Items Page</h1>

      {/* ✅ Navigate to add page */}
      <Link to="add">
        <CiCirclePlus className="text-[50px] absolute right-3 bottom-3 cursor-pointer hover:text-red-500" />
      </Link>

    </div>
  );
}