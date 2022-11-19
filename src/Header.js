import React from "react";
import logo from "./reddit-logo-2436.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        className="logo"
        alt="reddit logo"
        width="48px"
        height="48px"
      />
      <div className="headers">
        <h1><span className="react">React</span> Reddit Client</h1>
        <h2>Only using HTML, CSS, Javascript, and React (no Redux)</h2>
      </div>

    </header>
  );
};

export default Header;
