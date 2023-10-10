import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

import "./css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <NavigationBar />
        <div className="home-content">
          <p>This is Home Page.</p>
        </div>
      </div>
    );
  }
}
export default Home;
