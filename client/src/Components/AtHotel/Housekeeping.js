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
    this.cleanginForm = this.cleanginForm.bind(this);
    this.bookSomething = this.bookSomething.bind(this);
    this.handleFormDataSubmit = this.handleFormDataSubmit.bind(this);
  }

  handleFormDataSubmit(e) {
    e.preventDefault();
    // window.location.reload = "true";
  }

  bookSomething(bookIt) {
    console.log(bookIt);
    // return bookIt;
  }

  cleanginForm(bookMe) {
    return (
      <form
        style={{ marginTop: "20px", marginLeft: "50px" }}
        onSubmit={this.handleFormDataSubmit}
      >
        <input
          type="tel"
          name="mb_no"
          className="form-control"
          value={this.state.mb_no}
          placeholder="Please enter your Mobile Number"
          onChange={(e) => {
            this.setState({ mb_no: e.target.value });
          }}
        />
        <br />
        <button
          className="btn btn-success form-control"
          type="submit"
          name="bookMe"
          value="Confirm booking"
          onClick={this.bookSomething(bookMe)}
        >
          Get OTP
        </button>
      </form>
    );
  }

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
            <TabPane eventKey="room_cleaning">
              {this.cleanginForm("room_cleaning")}
            </TabPane>
            <TabPane eventKey="laundry">{this.cleanginForm("laundry")}</TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Housekeeping;
