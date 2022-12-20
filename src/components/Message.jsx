import React from "react";

const Message = () => {
  return (
    <div className="message user">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="user"
          class="avatar"
        />
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
