import { React, Component } from "react";
import { Row, Col } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import axios from "axios";
import StaffNavigationBar from "./StaffNavigationBar";

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
          // correct pwd
          if (res.data === "OK") window.location = "/hotel/staff/home";
          // wrong pwd
          else window.location = "/hotel/staff";
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
          <StaffNavigationBar />
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <p style={{ fontFamily: "Times New Roman", fontSize: "xx-large" }}>
              Welcome
            </p>
            <form
              onSubmit={this.handleFormSubmission}
              className="book-room-form"
            >
              <input
                name="username"
                type="text"
                placeholder="user id"
                value={this.state.username}
                className="form-control"
                onChange={this.handleFormDataChange}
                // required
              />
              <br />
              <input
                name="pwd"
                type="password"
                placeholder="password"
                value={this.state.pwd}
                className="form-control"
                onChange={this.handleFormDataChange}
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
