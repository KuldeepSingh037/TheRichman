import { React, Component } from "react";
import axios from "axios";

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
      name: "",
      room_type: 1,
      no_of_rooms: "",
      mb_no: "",
      start_date: new Date(),
      end_date: new Date(),
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
      email: "",
      city: "",
      id_details: "",
      requirements: "",
    };

    console.log(newBooking);

    try {
      axios
        .post("http://localhost:5000/online-booking/book-room", newBooking, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          window.location.reload(true);
        })
        .catch((error) => {
          console.log("post: " + error);
          console.error();
        });
    } catch (error) {
      console.log(error);
    }
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
                    required
                  />
                  <br />
                  <select
                    placeholder="Select Room Type"
                    onChange={this.handleFormDataChange}
                    name="room_type"
                    className="form-control"
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
                    type="number"
                    name="no_of_rooms"
                    placeholder="Number of Rooms"
                    onChange={this.handleFormDataChange}
                    value={this.state.no_of_rooms}
                    className="form-control"
                    // maxLength="2"
                    // minLength="1"
                    required
                  />
                  <br />
                  <input
                    type="tel"
                    name="mb_no"
                    placeholder="(Country code) Mobile number"
                    onChange={this.handleFormDataChange}
                    value={this.state.mb_no}
                    className="form-control"
                    // maxLength="10"
                    // minLength="10"
                    required
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
