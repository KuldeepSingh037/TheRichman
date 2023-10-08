import { React, Component } from "react";
import Container from "react-bootstrap/esm/Container";

class OtherRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.location.reload="true";
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            required
            placeholder="Requests"
            name="requests"
            value={this.state.request}
            onChange={this.handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-success">
            Submit Request
          </button>
        </form>
      </Container>
    );
  }
}

export default OtherRequests;
