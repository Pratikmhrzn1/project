import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  console.log("Rendering Header"); // Debugging log
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="customizeText">Customize Your Mobile Case</div>
    </header>
  );
};

export default Header;
