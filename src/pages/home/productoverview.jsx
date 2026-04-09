import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductOverview() {

    const { id } = useParams(); // get id from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
                );
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{product.name}</h1>

            <img 
                src={product.image[0]} 
                style={{ width: "300px", borderRadius: "10px" }}
            />

            <h2>LKR {product.price}</h2>

            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Dimensions:</strong> {product.dimensions}</p>

            <p>{product.description}</p>
        </div>
    );
}