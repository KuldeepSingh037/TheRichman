import React, { Component } from "react";

import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Home.css";

class Gallery extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/1.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/2.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/18.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/3.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/4.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/5.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "60px",
                  fontFamily: "Lucida Calligraphy",
                  color: "rgb(130, 9, 9)",
                  opacity: "0.4",
                }}
              >
                Rooms
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/6.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/7.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/8.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/9.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/10.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/11.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "60px",
                  fontFamily: "Lucida Calligraphy",
                  color: "rgb(130, 9, 9)",
                  opacity: "0.4",
                }}
              >
                Facilities
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/12.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/13.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/14.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={require("./static/gallery/15.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/16.jpg")}
                id="marquee-img"
                vspace="50"
              />
            </Col>
            <Col>
              <img
                src={require("./static/gallery/17.jpeg")}
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
export default Gallery;
