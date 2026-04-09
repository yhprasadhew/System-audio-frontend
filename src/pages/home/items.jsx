import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productCard"; // make sure the path is correct

export default function Items() { 
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
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

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {products.map((item) => (
                    <ProductCard
                        key={item._id}        // must be _id from backend
                        id={item._id}         // used for navigation
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        image={item.image?.[0] || "https://picsum.photos/300"}
                    />
                ))}

            </div>

        </div>
    );
}