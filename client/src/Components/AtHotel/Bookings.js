import { React, Component } from "react";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: "",
    };
    this.bookSomething = this.bookSomething.bind(this);
    this.bookingForm = this.bookingForm.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  bookSomething(bookIt) {
    console.log(bookIt);
    // return bookIt;
  }

  bookingForm(bookMe) {
    return (
      <form
        style={{ marginTop: "20px", marginLeft: "50px" }}
        onSubmit={this.handleFormSubmission}
      >
        <input
          type="number"
          onChange={(e) => {
            this.setState({ members: e.target.value });
          }}
          name="members"
          placeholder="No of people"
          value={this.state.members}
          className="form-control"
          required
        />
        <br />
        <button
          className="btn btn-success form-control"
          type="submit"
          name="bookMe"
          value="Confirm booking"
          onClick={this.bookSomething(bookMe)}
        >
          Confirm Booking
        </button>
      </form>
    );
  }

  handleFormSubmission(e) {
    e.preventDefault();
  }

  render() {
    return (
      <TabContainer defaultActiveKey="book_spa">
        <div className="d-flex">
          <Nav variant="underline" className="flex-column">
            <NavItem>
              <NavLink style={{ width: "160px" }} eventKey="book_spa">
                Spa Booking
              </NavLink>
              <NavLink eventKey="book_saloon">Hair Dressing</NavLink>
              <NavLink eventKey="book_room">Meeting Facility</NavLink>
              <NavLink eventKey="book_tour">Tours and Excursions</NavLink>
              <NavLink eventKey="book_vehicle">Pickup / Drop</NavLink>
            </NavItem>
          </Nav>

          <TabContent>
            <TabPane eventKey="book_spa">
              {this.bookingForm("book_spa")}
            </TabPane>
            <TabPane eventKey="book_saloon">
              {this.bookingForm("book_saloon")}
            </TabPane>
            <TabPane eventKey="book_room">
              {this.bookingForm("book_room")}
            </TabPane>
            <TabPane eventKey="book_tour">
              {this.bookingForm("book_room")}
            </TabPane>
            <TabPane eventKey="book_vehicle">
              {this.bookingForm("book_room")}
            </TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Bookings;
