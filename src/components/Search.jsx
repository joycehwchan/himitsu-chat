import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find friend" />
      </div>

      <div className="contact">
        <img
          src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="user"
          className="avatar"
        />
        <div className="contactInfo">
          <span>Name</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
