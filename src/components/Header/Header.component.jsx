import React from "react";

import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <div className="logo">E-Learner</div>
        <div className="option">Categories</div>
        <input type="text" placeholder="Search for courses"/><span><button type="submit">SE</button></span>
        <div className="option">Courses</div>
        <div className="option">
            <button>Log In</button>
        </div>
        <div className="option">
            <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
