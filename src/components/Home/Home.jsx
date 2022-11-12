import React, { Component } from "react";
import Navbar from "../common/NavBar";
import DropBox from "../common/DropBox";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DropBox />
      </div>
    );
  }
}

export default Home;
