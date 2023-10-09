import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import { NavLink } from "react-bootstrap";
import axios from "axios";

class StaffLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pwd: "",
    };

    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormDataChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmission(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      pwd: this.state.pwd,
    };
    console.log(newUser);

    try {
      axios
        .post("http://localhost:5000/staff/check-login", newUser)
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
          window.location = "/hotel/staff/home";
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <NavLink href="/">
            <img
              alt="logo"
              height="150px"
              width="300px"
              src={require("../static/logo.jpg")}
            />
          </NavLink>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <p style={{ fontFamily: "Times New Roman", fontSize: "xx-large" }}>
              Welcome{" "}
            </p>
            <form
              onSubmit={this.handleFormSubmission}
              className="book-room-form"
            >
              <input
                onChange={this.handleFormDataChange}
                type="text"
                name="username"
                placeholder="user id"
                value={this.state.username}
                className="form-control"
                // required
              />
              <br />
              <input
                type="password"
                placeholder="password"
                onChange={this.handleFormDataChange}
                name="pwd"
                className="form-control"
                // required
              />
              <br />
              <button
                className="btn btn-success form-control"
                type="submit"
                value="login"
              >
                Login
              </button>
            </form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default StaffLogin;
