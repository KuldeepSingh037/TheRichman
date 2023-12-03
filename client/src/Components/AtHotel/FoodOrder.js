import { React, Component } from "react";

import TabPane from "react-bootstrap/TabPane";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/esm/TabContent";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

import "./css/InternalHome.css";

class FoodOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.value;
    if (this.state.foodItems.includes(item)) {
      this.setState({
        foodItems: this.state.foodItems.filter((obj) => obj !== item),
      });
    } else this.setState({ foodItems: this.state.foodItems.concat(item) });
    console.log("Food items: " + this.state.foodItems);
  }

  render() {
    const starter = ["Starter 1", "Starter 2", "Starter 3", "Starter 4"];
    const side_dish = [
      "Side Dish 1",
      "Side Dish 2",
      "Side Dish 3",
      "Side Dish 4",
    ];
    const main_course = [
      "Main Course 1",
      "Main Course 2",
      "Main Course 3",
      "Main Course 4",
    ];
    const dessert = ["Dessert 1", "Dessert 2", "Dessert 3", "Dessert 4"];

    // const FoodDisplay = (props) => {
    //   props.items.map((item) => {
    //     return (
    //       <>
    //         <input
    //           type="checkbox"
    //           key={item}
    //           value={item}
    //           checked={this.state.foodItems.includes(item)}
    //           onChange={this.handleChange}
    //         />
    //         {item}
    //         <br />
    //       </>
    //     );
    //   });
    // };

    return (
      <TabContainer defaultActiveKey="starter">
        <div className="d-flex">
          <Nav variant="underline" className="flex-column">
            <NavItem>
              <NavLink style={{ width: "120px" }} eventKey="starter">
                Starters
              </NavLink>
              <NavLink eventKey="side_dish">Side Dishes</NavLink>
              <NavLink eventKey="main_course">Main Course</NavLink>
              <NavLink eventKey="dessert">Dessert</NavLink>
            </NavItem>
          </Nav>
          <TabContent>
            <TabPane eventKey="starter">
              <form>
                {/* <FoodDisplay items={starter} /> */}
                {starter.map((item) => {
                  return (
                    <>
                      <input
                        key={item}
                        type="checkbox"
                        value={item}
                        checked={this.state.foodItems.includes(item)}
                        onChange={this.handleChange}
                      />
                      {" " + item}
                      <br />
                    </>
                  );
                })}
              </form>
            </TabPane>
            <TabPane eventKey="side_dish">
              <form>
                {/* <FoodDisplay items={side_dish} /> */}
                {side_dish.map((item) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        key={item}
                        value={item}
                        checked={this.state.foodItems.includes(item)}
                        onChange={this.handleChange}
                      />
                      {" " + item}
                      <br />
                    </>
                  );
                })}
              </form>
            </TabPane>
            <TabPane eventKey="main_course">
              <form>
                {/* <FoodDisplay items={main_course} /> */}
                {main_course.map((item) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        key={item}
                        value={item}
                        checked={this.state.foodItems.includes(item)}
                        onChange={this.handleChange}
                      />
                      {" " + item}
                      <br />
                    </>
                  );
                })}
              </form>
            </TabPane>
            <TabPane eventKey="dessert">
              <form>
                {dessert.map((item) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        key={item}
                        value={item}
                        checked={this.state.foodItems.includes(item)}
                        onChange={this.handleChange}
                      />
                      {" " + item}
                      <br />
                    </>
                  );
                })}
              </form>
            </TabPane>
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default FoodOrder;
