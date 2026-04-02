import "./register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">

        <h1 className="register-title">Register</h1>

        <input type="text" placeholder="Name" className="register-input" />
        <input type="email" placeholder="Email" className="register-input" />
        <input type="password" placeholder="Password" className="register-input" />

        <button className="register-btn">Register</button>

      </div>
    </div>
  );
}