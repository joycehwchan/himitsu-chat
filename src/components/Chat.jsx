import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatTopBbar">
        <span>{data.user?.displayName}</span>
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
