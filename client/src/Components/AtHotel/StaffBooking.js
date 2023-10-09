import { React, Component } from "react";
import Container from "react-bootstrap/Container";
import { DateRange } from "react-date-range";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";

class StaffBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      room_type: 1,
      no_of_rooms: "",
      mb_no: "",
      start_date: new Date(),
      end_date: new Date(),
      email: "",
      city: "",
      id_details: "",
      requirements: "",
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleDateChange(ranges) {
    this.setState({
      start_date: ranges.selection.startDate,
      end_date: ranges.selection.endDate,
    });
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const newBooking = {
      name: this.state.name,
      room_type: this.state.room_type,
      no_of_rooms: this.state.no_of_rooms,
      mb_no: this.state.mb_no,
      start_date: this.state.start_date,
      end_date: this.state.end_date,

      email: this.state.email,
      city: this.state.city,
      id_details: this.state.id_details,
      requirements: this.state.requirements,
    };

    console.log(newBooking);
    axios
      .post("http://localhost:5000/online-booking/book-room", newBooking, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        // pop up notification and reload
        window.location.reload(true);
      })
      .catch((error) => {
        console.log("post: " + error);
        console.error();
      });
  }

  handleFormDataChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const selectionRange = {
      startDate: this.state.start_date,
      endDate: this.state.end_date,
      key: "selection",
    };

    return (
      <Container fluid>
        <form onSubmit={this.handleFormSubmission}>
          <Row style={{ paddingTop: "60px", marginLeft: "200px" }}>
            <Col>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                onChange={this.handleFormDataChange}
                value={this.state.name}
                required
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.email}
              />
              <br />
              <input
                type="tel"
                name="mb_no"
                placeholder="(Country code) Mobile Number"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.mb_no}
                required
              />
              <br />
              <input
                type="text"
                name="city"
                placeholder="City, State"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.city}
                required
              />
              <br />
              <textarea
                name="id_details"
                placeholder="Id Type: Id number"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.id_details}
                required
              />
              <br />
              <select
                name="room_type"
                placeholder="Select Room Type"
                className="form-control"
                onChange={this.handleFormDataChange}
                required
              >
                <option value="1">
                  Premier Room with Garden ViewLeanne Graham
                </option>
                <option value="2">Premium Room with Pool View</option>
                <option value="3">
                  Premier Lake View with Semi Private Pool
                </option>
                <option value="4">Luxury Suite Drawing Room</option>
                <option value="5">
                  Kohinoor Luxury Suite with Private Pool
                </option>
              </select>
              <br />
              <input
                name="no_of_rooms"
                type="number"
                placeholder="Number of Rooms"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.no_of_rooms}
                required
              />
            </Col>
            <Col>
              <DateRange
                ranges={[selectionRange]}
                onChange={this.handleDateChange}
                minDate={new Date()}
              />
              <textarea
                style={{ paddingTop: "15px" }}
                rows={3}
                name="requirements"
                placeholder="Additional Requirements"
                className="form-control"
                onChange={this.handleFormDataChange}
                value={this.state.requirements}
              />
              <br />
              <button className="btn btn-success form-control" type="submit">
                Book Room
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}
export default StaffBooking;
