const router = require("express").Router();
let Booking = require("../models/booking");

router.get("/view-rooms", async (req, res) => {
  try {
    await Booking.find()
      .then((allBookings) => res.json(allBookings))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});

router.post("/book-room", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      room_type: Number(req.body.room_type),
      no_of_rooms: Number(req.body.no_of_rooms),
      mb_no: req.body.mb_no,
      start_date: Date.parse(req.body.start_date),
      end_date: Date.parse(req.body.end_date),
      email: req.body.email,
      city: req.body.city,
      id_details: req.body.id_details,
      requirements: req.body.requirements,
    };

    console.log(data);

    const newBooking = await Booking.create(data);
    return res.status(201).send(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    await Booking.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400).json("Error: " + error);
      });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
