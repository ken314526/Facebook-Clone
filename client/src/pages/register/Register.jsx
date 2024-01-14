import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match.");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FACEBOOK CLONE</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FACEBOOK CLONE.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              required
              ref={username}
              placeholder="Username"
            />
            <input
              className="loginInput"
              required
              ref={email}
              placeholder="Email"
              type="email"
            />
            <input
              className="loginInput"
              required
              ref={password}
              placeholder="Password"
              type="password"
              minLength="6"
            />
            <input
              className="loginInput"
              required
              ref={confirmPassword}
              placeholder="Confirm Password"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
