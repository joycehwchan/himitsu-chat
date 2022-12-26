import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message user">
      <div className="messageInfo">
        <img src="" alt="user" className="avatar" />
        <span className="messageTime">just now</span>
      </div>
      <div className="messageContent">
        <p className="messageText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          eos.
        </p>
        <img
          src="https://images.unsplash.com/photo-1671471433724-8de50b3f45f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt=""
          className="messageImg"
        />
      </div>
    </div>
  );
};

export default Message;
