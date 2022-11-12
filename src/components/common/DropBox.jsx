import React, { Component } from "react";
import "./DropBox.css";

class DropBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="drop_box"></div>
        <div className="button">
          <button className=" capture btn ">Capture</button>
          <button className="btn upload">Upload</button>
        </div>
        <button className="btn find_breed">Find Breed</button>
      </div>
    );
  }
}

export default DropBox;
