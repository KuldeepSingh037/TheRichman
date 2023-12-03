import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigationBar from "./NavigationBar";

class Dining extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <p>Add menu / available items too.</p>
          <Row>
            <Col>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "60px",
                  fontFamily: "Lucida Calligraphy",
                  color: "rgb(130, 9, 99)",
                  opacity: "0.4",
                }}
              >
                Food
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/19.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/20.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/21.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/22.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/23.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/24.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/25.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/26.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/27.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Dining;
