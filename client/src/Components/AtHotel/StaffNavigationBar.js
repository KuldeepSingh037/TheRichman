import { React, Component } from "react";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/NavLink";

class StaffNavigationBar extends Component {
  render() {
    return (
      <Container fluid>
        <NavLink href="/" style={{ width: "200px" }}>
          <img
            alt="logo"
            height="150px"
            width="300px"
            src={require("../static/logo.jpg")}
          />
        </NavLink>
      </Container>
    );
  }
}

export default StaffNavigationBar;
