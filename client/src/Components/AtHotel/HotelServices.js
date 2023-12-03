import { React, Component } from "react";
import Container from "react-bootstrap/Container";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import FoodOrder from "./FoodOrder";
import Housekeeping from "./Housekeeping";
import Bookings from "./Bookings";
import OtherRequests from "./OtherRequests";

class HotelServices extends Component {
  render() {
    return (
      <Container
        style={{
          borderRadius: "20px",
          border: "1px solid black",
        }}
      >
        <TabContainer defaultActiveKey="housekeeping">
          <div className="d-flex">
            <Nav variant="underline" className="flex-column">
              <NavItem>
                <NavLink style={{ width: "220px" }} eventKey="order_food">
                  Order Food
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="housekeeping">Housekeeping Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="bookings">Bookings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="other_requests">Other Requests</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="billing_info">Billing Information</NavLink>
              </NavItem>
            </Nav>
            <TabContent>
              <TabPane eventKey="order_food">
                <FoodOrder />
              </TabPane>
              <TabPane eventKey="housekeeping">
                <Housekeeping />
              </TabPane>
              <TabPane eventKey="bookings">
                <Bookings />
              </TabPane>
              <TabPane eventKey="other_requests">
                <OtherRequests />
              </TabPane>
              <TabPane eventKey="billing_info">Billing Information</TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </Container>
    );
  }
}

export default HotelServices;
