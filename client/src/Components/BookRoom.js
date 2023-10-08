import { React, Component } from "react";

import "./css/BookRoom.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navigationbar from "./Navigationbar";

class BookRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: new Date(),
      end_date: new Date(),
      name: "",
      room_type: 0,
      no_of_rooms: "",
      mb_no: "",
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
    e.preventdefault();
    console.log(
      this.state.name,
      this.state.no_of_rooms,
      this.state.room_type,
      this.state.mb_no
    );

    window.location.reload(true);
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
      <div className="book-room-main">
        <Navigationbar />

        <p>Book Room</p>

        <Container className="book-room-details">
          <Row>
            <Col>
              <p className="book-room-date-range text-center">Pick the Dates</p>
              <DateRange
                ranges={[selectionRange]}
                onChange={this.handleDateChange}
                minDate={new Date()}
              />
            </Col>
            <Col className="book-room-pd">
              <Row>Please fill out the details</Row>
              <Row>
                <form
                  onSubmit={this.handleFormSubmission}
                  className="book-room-form"
                >
                  <input
                    onChange={this.handleFormDataChange}
                    type="text"
                    name="name"
                    placeholder="Booking Name"
                    value={this.state.name}
                    className="form-control"
                  />
                  <br />
                  <select
                    placeholder="Select Room Type"
                    onChange={this.handleFormDataChange}
                    name="room_type"
                    className="form-control"
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
                    type="text"
                    name="no_of_rooms"
                    placeholder="Number of Rooms"
                    onChange={this.handleFormDataChange}
                    value={this.state.no_of_rooms}
                    className="form-control"
                    maxLength="2"
                  />
                  <br />
                  <input
                    type="text"
                    name="mb_no"
                    placeholder="Mobile Number"
                    onChange={this.handleFormDataChange}
                    value={this.state.mb_no}
                    className="form-control"
                    maxLength="10"
                    minLength="10"
                  />
                  <br />
                  <button
                    className="btn btn-success form-control"
                    type="submit"
                    value="Request OTP"
                  >
                    Request OTP
                  </button>
                </form>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookRoom;