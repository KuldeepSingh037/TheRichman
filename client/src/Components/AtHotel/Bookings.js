import { React, Component } from "react";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

class Bookings extends Component {
  render() {
    return (
      <TabContainer defaultActiveKey="book_spa">
        <div className="d-flex">
          <Nav variant="underline" className="flex-column">
            <NavItem>
              <NavLink style={{ width: "200px" }} eventKey="book_spa">
                Spa Booking
              </NavLink>
              <NavLink eventKey="book_saloon">Hair Dressing</NavLink>
              <NavLink eventKey="book_room">Meeting Facility</NavLink>
              <NavLink eventKey="book_tour">Tours and Excursions</NavLink>
              <NavLink eventKey="book_vehicle">Pickup / Drop</NavLink>
            </NavItem>
          </Nav>

          <TabContent>
            <TabPane eventKey="book_spa">Spa Booking</TabPane>
            <TabPane eventKey="book_saloon">Hair Dressing</TabPane>
            <TabPane eventKey="book_room">Meeting Facility</TabPane>
            <TabPane eventKey="book_tour">Tours and Excursions</TabPane>
            <TabPane eventKey="book_vehicle">Pickup / Drop</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Bookings;
