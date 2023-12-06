import { React, Component } from "react";
import Container from "react-bootstrap/esm/Container";

class OtherRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // window.location.reload = "true";
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit} style={{ marginTop: "20px" }}>
          <textarea
            type="text"
            required
            placeholder="Requests"
            name="requests"
            value={this.state.request}
            cols="30"
            rows="4"
            onChange={(e) => {
              this.setState({ request: e.target.value });
            }}
            className="form-control"
          />
          <br />
          <button
            style={{ alignContent: "right", fontWeight: "bold" }}
            type="submit"
            className="btn btn-success"
          >
            Submit Request
          </button>
        </form>
      </Container>
    );
  }
}

export default OtherRequests;
