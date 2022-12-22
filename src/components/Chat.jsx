import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatTopBbar">
        <span>Name</span>
        <div className="chatIcons">
          <i className="uil uil-video"></i>
          <i className="uil uil-user-plus"></i>
          <i className="uil uil-sign-out-alt" onClick={() => signOut(auth)}></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
