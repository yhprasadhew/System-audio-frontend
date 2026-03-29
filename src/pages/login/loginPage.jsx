import { useState } from "react";
import "./login.css";
import axios from "axios";  

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

          // ✅ API call inside submit function
          //💕 frontend eka backend ekath ekka connect wena thana..
          
        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password
        })
        .then(response => {
            console.log("Login successful:", response.data);
        })
        .catch(error => {
            console.error("Login failed:", error.response || error.message);
        });
    };

    return (
        <div className="bg-picture">
            
            <div className="w-[400px] p-6 bg-white rounded-lg shadow-lg">
                
                {/* ✅ Fixed image path (removed extra space) */}
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
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  
                        required
                    />

                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>

                </form>
            </div>  

        </div>
    );
}