import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="message" />
      <div className="iconWrapper">
        <i className="uil uil-paperclip"></i>
      </div>
      <div className="send">
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file" className="">
          <div className="iconWrapper">
            <i className="uil uil-image-plus"></i>
          </div>
        </label>
        <button>
          <i className="uil uil-message"></i> Send
        </button>
      </div>
    </div>
  );
};

export default Input;
