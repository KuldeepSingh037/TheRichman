const router = require("express").Router();
let Booking = require("../models/onlineBooking");

router.post("/book-room", async (request, response) => {
  try {
    console.log("request: " + request.body);
    console.log("request.body: " + request.body);

    const data = {
      name: request.body.name,
      room_type: Number(request.body.room_type),
      no_of_rooms: request.body.no_of_rooms,
      mb_no: request.body.mb_no,
      start_date: Date.parse(request.body.start_date),
      end_date: Date.parse(request.body.end_date),
    };

    const newBooking = await Booking.create(data);

    // newBooking
    //   .save()
    //   .then(() => response.json("Online Booking Done!"))
    //   .catch((err) => response.status(400).json("Error: " + err));

    return response.status(201).send(newBooking);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
