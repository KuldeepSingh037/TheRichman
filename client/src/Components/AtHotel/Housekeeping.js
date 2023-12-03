import { React, Component } from "react";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

class Housekeeping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mb_no: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // window.location.reload = "true";
  }

  render() {
    const CleaningForm = () => {
      return (
        <form
          style={{ marginTop: "20px", marginLeft: "50px" }}
          onSubmit={this.handleSubmit}
        >
          <input
            type="tel"
            name="mb_no"
            className="form-control"
            value={this.state.mb_no}
            onChange={(e) => {
              this.setState({ mb_no: e.target.value });
            }}
          />
          <label>Please enter your Mobile Number</label>
          <br />
          <br />
          <input type="submit" className="btn btn-success" value="Get OTP" />
        </form>
      );
    };

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
            <TabPane eventKey="room_cleaning">
              <CleaningForm />
            </TabPane>
            <TabPane eventKey="laundry">
              <CleaningForm />
            </TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Housekeeping;
