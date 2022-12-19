import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formHeader">
          <h1 className="formTitle">Himitsu Chat</h1>
          <p className="formSubtitle">Register</p>
        </div>
        <form>
          <input type="text" placeholder="usename" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="profile" style={{ display: "none" }} />
          <label htmlFor="profile" className="avatarLabel">
            <div className="addAvatarIcon">
              <i className="uil uil-image-plus"></i>
            </div>
            <p>Add profile picture</p>
          </label>
          <button>Sign up</button>
        </form>
        <p className="formFooter">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
