import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Logging in...");

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    axios.post(`${backendUrl}/api/users/login`, {
      email,
      password
    })
    .then((response) => {

      toast.dismiss(loadingToast);

      const token = response.data.token;

      // ✅ Save token
      localStorage.setItem("token", token);

      // ✅ Decode token
      const decoded = jwtDecode(token);
      const role = decoded.role;

      localStorage.setItem("role", role);

      toast.success("Login successful! ✅");

      // ✅ Redirect based on role
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1200);
    })
    .catch((error) => {
      toast.dismiss(loadingToast);
      console.error(error);
      toast.error("Invalid email or password ❌");
    });
  };

  return (
    <div className="bg-picture">

      <div className="login-box">

        {/* 🔥 Logo */}
        <img 
          src="/logo.jpg" 
          alt="logo"
          className="login-logo"
        />

        {/* 🔥 Title */}
        <h2 className="login-title">Welcome Back </h2>

        {/* 🔥 Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {/* 🔗 Register Link */}
        <p className="text-center text-white mt-2">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-300 font-semibold hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}