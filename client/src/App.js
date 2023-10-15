import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dining from "./Components/Dining";
import Rooms from "./Components/Rooms";
import Gallery from "./Components/Gallery";
import BookRoom from "./Components/BookRoom";
import InternalHome from "./Components/AtHotel/InternalHome";
import StaffLogin from "./Components/AtHotel/StaffLogin";
import StaffHome from "./Components/AtHotel/StaffHome";
import StaffViewBilling from "./Components/AtHotel/StaffViewBilling";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          <Route path="/dining" element={<Dining />}></Route>
          <Route path="/book-room" element={<BookRoom />}></Route>
          <Route path="/hotel" element={<InternalHome />}></Route>

          <Route path="/hotel/staff" element={<StaffLogin />}></Route>
          <Route path="/hotel/staff/home" element={<StaffHome />}></Route>

          <Route
            path="/hotel/staff/billing"
            element={<StaffViewBilling />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
