import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formHeader">
          <h1 className="formTitle">Himitsu Chat</h1>
          <p className="formSubtitle">Login</p>
        </div>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign up</button>
        </form>
        <p className="formFooter">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
