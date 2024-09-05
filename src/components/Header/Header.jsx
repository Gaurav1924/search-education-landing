import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Search Education</div>
        <input type="text" className="search-bar" placeholder="Search..." />

        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Find a Course</li>
            <li>Consult a Counselor</li>
            <li>Our Services</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="auth-section">
          <button className="auth-btn login">Log In</button>
          <button className="auth-btn signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
