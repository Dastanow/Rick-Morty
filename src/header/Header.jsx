import React from "react";
import "./heeder.scss";
import logo from "../pages/Rick_and_Morty_logo.webp";
import logo2 from "../pages/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="continer">
      <div className="logo">
        <img src={logo} alt="title" />
      </div>
      <div className="logo2">
        <img src={logo2} alt="" />
      </div>
      <h2>log in</h2>
    </div>
  );
};

export default Header;
