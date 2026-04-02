import { useState } from "react";
import "./register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Creating account...");

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    axios.post(`${backendUrl}/api/users/register`, {
      firstName,
      lastName,
      email,
      password,
       phoneNumber: phone,
      address
    })
    .then((res) => {
      toast.dismiss(loadingToast);
      toast.success("Account created successfully ✅");

      // redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    })
    .catch((err) => {
      toast.dismiss(loadingToast);
      console.error(err);
      toast.error("Registration failed ❌");
    });
  };

  return (
    <div className="register-container">

      <div className="register-box">

        {/* Title */}
        <h2 className="register-title">Create Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="First Name"
            className="register-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            className="register-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone"
            className="register-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            className="register-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>

      </div>

    </div>
  );
}