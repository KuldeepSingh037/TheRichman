import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

import "./css/Home.css";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <NavigationBar />
        <div className="home-content">
          <Container style={{ marginTop: "50px" }}>
            <p style={{ textAlign: "left", textSize: "30px" }}>
              <b>Come and stay with us to feel even better than home.</b>
            </p>
            <p style={{ textSize: "30px" }}>
              <b>The place where you wish to be borned.</b>
            </p>
            <marquee scrollamount="9px">
              <table>
                <tr>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/room.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/greeting.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/abcd.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/reception3.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/bedroom-interior-interior-design-wallpaper-preview.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/gettyimages-1007087224-612x612.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/1.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/gettyimages-184609057-612x612.jpg")}
                      hspace="25"
                    />
                  </td>
                </tr>
              </table>
            </marquee>
            <b>
              <p style={{ textSize: "30px", textAlign: "right" }}>
                A Business Boutique hotel at heart of the City.
              </p>
              <p style={{ textSize: "30px", textDecoration: "underline" }}>
                5 Good Promises
              </p>
              <ul style={{ textSize: "30px" }}>
                <li>Good Sleep</li>
                <li>Fantastic Massage</li>
                <li>Delicious Food</li>
                <li>Good WiFi</li>
                <li>Best Connectivity</li>
              </ul>
            </b>
            <br />
            <marquee scrollamount="10px">
              <table>
                <tr>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/luxurious-hotel-room-wallpaper-preview.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/three-hotel-staff-6751599.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/luxury-hotel-room-bedroom-furniture-set-wallpaper-preview.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/gettyimages-871617622-612x612.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/reception4.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/reception2.jpg")}
                      hspace="25"
                    />
                  </td>
                  <td>
                    <img
                      id="marquee-img"
                      src={require("./static/home/interior-hotel-rendering-visualization.jpg")}
                      hspace="25"
                    />
                  </td>
                </tr>
              </table>
            </marquee>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              style={{
                color: "rgb(34, 89, 0)",
                fontSize: "30px",
                fontFamily: "Lucida Calligraphy",
              }}
              scrollamount="11"
            >
              Address : XYZ area, Udaipur, Rajasthan, Bharat - 313001
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default Home;
