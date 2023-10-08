import { React, Component } from "react";
import "./css/InternalHome.css";
import Container from "react-bootstrap/Container";
import HotelServices from "./HotelServices";

class InternalHome extends Component {
  render() {
    return (
      <>
        <img
          alt="logo"
          height="150px"
          width="300px"
          src="static/The_Richman_Hotel.png"
        />
        <Container className="hotel-home">
          <HotelServices />
        </Container>
      </>
    );
  }
}

export default InternalHome;
