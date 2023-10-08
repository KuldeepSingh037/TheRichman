const router = require("express").Router();
let Booking = require("../models/onlineBooking");

router.post("/book-room", async (request, response) => {
  try {
    const data = {
      name: request.body.name,
      room_type: Number(request.body.room_type),
      no_of_rooms: request.body.no_of_rooms,
      mb_no: request.body.mb_no,
      start_date: Date.parse(request.body.start_date),
      end_date: Date.parse(request.body.end_date),
    };

    console.log(data);

    const newBooking = await Booking.create(data);
    return response.status(201).send(newBooking);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
