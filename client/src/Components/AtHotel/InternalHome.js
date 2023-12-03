import { React, Component } from "react";
import "./css/InternalHome.css";
import Container from "react-bootstrap/Container";
import HotelServices from "./HotelServices";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavLink from "react-bootstrap/NavLink";
import StaffNavigationBar from "./StaffNavigationBar";

class InternalHome extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <StaffNavigationBar />
            </Col>
            <Col>
              <NavLink className="hotel-staff" href="/hotel/staff">
                Staff Login
              </NavLink>
            </Col>
          </Row>
        </Container>

        <Container className="hotel-home">
          <HotelServices />
        </Container>
      </>
    );
  }
}

export default InternalHome;
