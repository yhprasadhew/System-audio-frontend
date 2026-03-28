import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Contact from "./contact";
import Items from "./items";


export default function Homepage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 w-full flex items-center justify-center">
        <Routes>
          <Route 
            path="/" 
            element={
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome to the Homepage
              </h1>
            } 
          />
          <Route path="contact" element={<Contact />} />
          <Route path="items" element={<Items />} />
         
        </Routes>
      </div>

    </div>
  );
}