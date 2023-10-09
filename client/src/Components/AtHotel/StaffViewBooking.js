import { React, Component } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/NavLink";
import axios from "axios";

const RoomType = {
  1: "Premier Room with Garden ViewLeanne Graham",
  2: "Premium Room with Pool View",
  3: "Premier Lake View with Semi Private Pool",
  4: "Luxury Suite Drawing Room",
  5: "Kohinoor Luxury Suite with Private Pool",
};

class StaffViewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBookings: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get("http://localhost:5000/booking/view-rooms")
        .then((res) => {
          this.setState({ allBookings: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  displayBookings() {
    var k = 0;
    return this.state.allBookings.map((eachBooking) => {
      k = k + 1;
      return (
        // <Booking key={eachBooking._id} details={eachBooking} eventKey={k} />
        <AccordionItem eventKey={k} key={eachBooking._id}>
          <AccordionHeader>
            <Container>
              <Row>
                <Col>
                  <Row>{eachBooking.name}</Row>
                  <Row>Mb no: {eachBooking.mb_no}</Row>
                </Col>
                <Col>
                  <Row>Check-in Date: {eachBooking.start_date}</Row>
                  <Row>Check-out Date: {eachBooking.end_date}</Row>
                </Col>
              </Row>
            </Container>
          </AccordionHeader>
          <AccordionBody>
            <Container>
              <Row>
                <Col>
                  <Row>{eachBooking.city}</Row>
                  <Row>{eachBooking.id_details}</Row>
                  <Row>{eachBooking.requirements}</Row>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Row>Room: {RoomType[eachBooking.room_type]}</Row>
                      <Row>No of rooms: {eachBooking.no_of_rooms}</Row>
                    </Col>
                    <Col>
                      <Row>
                        <NavLink href="/hotel/staff/update">
                          {" "}
                          Update details
                        </NavLink>
                      </Row>
                      <Row>
                        <NavLink href="/hotel/staff/billing">
                          Billing details
                        </NavLink>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </AccordionBody>
        </AccordionItem>
      );
    });
  }

  render() {
    return (
      <Container>
        <Accordion alwaysOpen style={{ width: "1000px", paddingTop: "40px" }}>
          {this.displayBookings()}
        </Accordion>
      </Container>
    );
  }
}

export default StaffViewBooking;
