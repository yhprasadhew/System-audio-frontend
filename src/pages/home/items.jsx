import axios from "axios";
import { useEffect, useState } from "react";

export default function Items() { 
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res) => {
            console.log(res.data);
            setProducts(res.data); // ✅ store data
        })
        .catch((err) => {
            console.error(err);
        });

    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Products
            </h1>

            {/* 🔥 Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {products.map((item, index) => (
                    <div 
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
                    >
                        <img 
                            src={item.image || "https://picsum.photos/300"} 
                            alt={item.name}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                        />

                        <h2 className="text-lg font-semibold">
                            {item.name}
                        </h2>

                        <p className="text-green-600 font-bold">
                            LKR {item.price}
                        </p>

                        <p className="text-gray-500 text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}