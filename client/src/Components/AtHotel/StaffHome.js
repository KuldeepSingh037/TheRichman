import { React, Component } from "react";
import Container from "react-bootstrap/Container";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import NavItem from "react-bootstrap/NavItem";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import StaffBooking from "./StaffBooking";

class StaffHome extends Component {
  render() {
    return (
      <Container
        style={{
          marginTop: "100px",
          borderRadius: "20px",
          border: "1px solid black",
          height: "600px",
        }}
      >
        <TabContainer defaultActiveKey="book_room">
          <div className="d-flex">
            <Nav variant="underline" className="flex-column">
              <NavItem>
                <NavLink style={{ width: "220px" }} eventKey="book_room">
                  Book Room
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="view_boking">View Booking</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="update_booking">Update Booking</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="billing_info">Billing Information</NavLink>
              </NavItem>
            </Nav>
            <TabContent>
              <TabPane eventKey="book_room">
                <StaffBooking />
              </TabPane>
              <TabPane eventKey="view_booking">
                {/* <Housekeeping /> */}
              </TabPane>
              <TabPane eventKey="update_booking">{/* <Bookings /> */}</TabPane>
              <TabPane eventKey="billing_info">
                {/* <OtherRequests /> */}
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </Container>
    );
  }
}

export default StaffHome;
