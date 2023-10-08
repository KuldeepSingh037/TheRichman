import { Component } from "react";
import { Col, Container, NavLink } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./css/Navigationbar.css";

class Navigationbar extends Component {
  render() {
    return (
      <Container fluid className="nav-main">
        <Navbar sticky>
          <Col>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                height="100px"
                width="200px"
                src="static/The_Richman_Hotel.png"
              />
            </Navbar.Brand>
          </Col>
          <Col className="nav-mid text-center" xs="6">
            <Nav>
              <Col>
                <NavLink href="/gallery">Gallery</NavLink>
              </Col>
              <Col>
                <NavLink href="/rooms">Rooms</NavLink>
              </Col>
              <Col>
                <NavLink href="/dining">Dining</NavLink>
              </Col>
            </Nav>
          </Col>
          <Col className="nav-right text-center" xs="3">
            <NavLink href="/hotel"> Manage Services</NavLink>
            <NavLink href="/book-room"> Book a Room</NavLink>
          </Col>
        </Navbar>
      </Container>
    );
  }
}

export default Navigationbar;
