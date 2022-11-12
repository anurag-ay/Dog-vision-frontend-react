import React, { Component } from "react";
import dogLogo from "../../public/images/dog_logo.png";
import gitLogo from "../../public/images/Git-icon.svg";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={dogLogo} alt="" />
        </div>

        <div className="Navigation_bar">
          <div className="name">
            <h1>DogVision</h1>
          </div>
        </div>

        <a className="aboutText" href="null">
          About
        </a>

        <div className="git">
          <a href="https://github.com/Shahwaz9305">
            <img src={gitLogo} alt="" />
          </a>
        </div>
      </header>
    );
  }
}

export default NavBar;
