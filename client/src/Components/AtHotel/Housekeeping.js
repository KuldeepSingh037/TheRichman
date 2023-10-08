import { React, Component } from "react";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

class Housekeeping extends Component {
  render() {
    return (
      <TabContainer defaultActiveKey="room_cleaning">
        <div className="d-flex">
          <Nav variant="underline" className="flex-column">
            <NavItem>
              <NavLink style={{ width: "200px" }} eventKey="room_cleaning">
                Room Cleaning
              </NavLink>
              <NavLink eventKey="laundry">Laundry / Dry Cleaning</NavLink>
            </NavItem>
          </Nav>

          <TabContent>
            <TabPane eventKey="room_cleaning">Clean Room</TabPane>
            <TabPane eventKey="laundry">Laundry</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Housekeeping;
