import React, { Component } from "react";
import Navigationbar from "./Navigationbar";

import "./css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <Navigationbar />
        <div className="home-content">
          <p>This is Home Page.</p>
        </div>
      </div>
    );
  }
}
export default Home;
