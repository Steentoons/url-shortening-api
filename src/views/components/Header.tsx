import React, { useState } from "react";
import "../styles/header.css";
import Button from "./Button";
// import shortlyLogo from "../../assets/images/logo.png"
const shortlyLogo = require("../../assets/images/logo.png");
const shortlyBars = require("../../assets/images/bars.png");

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const printMenuState = menuOpen ? (
        <div className="header-menu-div">
            Menu
        </div>
    ) : ""
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-section-one">
          <div className="header-section-one-logo">
            <img src={shortlyLogo} alt="Shortly logo" />
          </div>
          <div className="header-section-one-list">
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
        <div className="header-section-two">
          <Button content="Login" background={false} />
          <Button content="Sign up" background={true} />
        </div>

        <div className="header-section-two-mobile">
          <img onClick={() => {openMenu(setMenuOpen, menuOpen)}} src={shortlyBars} alt="bars" />
        </div>
      </div>
      <div className="header-menu-wrapper">
        {printMenuState}
      </div>
    </div>
  );
};

const openMenu = (setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>, menuOpen: boolean) => {
    setMenuOpen(!menuOpen)
}

export default Header;
