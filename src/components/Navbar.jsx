import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="user">
        <img
          src={currentUser.photoURL}
          alt={currentUser.displayName}
          className="avatar avatar-sm"
        />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
