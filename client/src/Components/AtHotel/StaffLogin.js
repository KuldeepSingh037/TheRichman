import { React, Component } from "react";
import { Row } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import { NavLink } from "react-bootstrap";

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
    const user = {
      username: this.state.username,
      pwd: this.state.pwd,
    };
    console.log(user);
    window.location="/hotel/staff-booking"
  }

  render() {
    return (
      <Container style={{ paddingTop: "200px" }}>
        <Row>
          <NavLink href="/">
            <img alt="logo" height="150px" width="300px" src="/" />
          </NavLink>
        </Row>
        <Row>
          <p style={{ fontFamily: "Times New Roman", fontSize: "xx-large" }}>
            Welcome
          </p>
        </Row>
        <Row>
          <form onSubmit={this.handleFormSubmission} className="book-room-form">
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
        </Row>
      </Container>
    );
  }
}

export default StaffLogin;
