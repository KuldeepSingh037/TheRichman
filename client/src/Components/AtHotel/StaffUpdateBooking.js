import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";

function StaffUpdateBooking(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  console.log(id);

  useEffect(() => {
    axios
      .get("https://localhost:5000/booking/update/:" + id)
      .then((res) => {
        setData("asdasd");
        console.log("data: " + data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container>
      <p>Update booking page</p>
    </Container>
  );
}

// export default withRouter(StaffUpdateBooking);
export default StaffUpdateBooking;
