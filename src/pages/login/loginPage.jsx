import { useState } from "react";
import "./login.css";
import axios from "axios";  
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loadingToast = toast.loading("Logging in...");

        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password
        })
        .then(response => {
            toast.dismiss(loadingToast);

            console.log("FULL RESPONSE:", response.data);

            // ✅ Save token
            const token = response.data.token;
            localStorage.setItem("token", token);

            // ✅ Decode token
            const decoded = jwtDecode(token);
            console.log("DECODED:", decoded);

            const role = decoded.role;

            // ✅ Save role
            localStorage.setItem("role", role);

            toast.success("Login successful! ✅");

            // ✅ Redirect based on role
            setTimeout(() => {
                if (role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }, 1500);
        })
        .catch(error => {
            toast.dismiss(loadingToast);

            console.error("Login failed:", error.response || error.message);
            toast.error("Invalid email or password ❌");
        });
    };

    return (
        <div className="bg-picture">
            
            <div className="w-[400px] p-6 bg-white rounded-lg shadow-lg">
                
                <img 
                    src="/logo.jpg" 
                    alt="Login Icon" 
                    className="w-16 h-16 mx-auto mb-4 rounded-full object-cover shadow-md" 
                />

                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">  
                    
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />

                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                    >
                        Login
                    </button>

                </form>
            </div>  

        </div>
    );
}