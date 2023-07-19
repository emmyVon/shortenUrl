import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Logo className="logo" />
        <div className="links">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="link-btn">
            <button>Login</button>
            <button className="btn">Sign up</button>
          </div>
        </div>
        <AiOutlineMenu className="menu" />
      </div>
    </nav>
  );
};

export default NavBar;
