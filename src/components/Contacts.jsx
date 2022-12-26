import React, { useState, useContext, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Contacts = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="contacts">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="contact"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img
            src={chat[1].userInfo.photoURL}
            alt={chat[1].userInfo.displayName}
            className="avatar"
          />
          <div className="contactInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
