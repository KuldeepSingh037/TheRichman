const router = require("express").Router();
let Booking = require("../models/onlineBooking");

router.route("/book-room").post(async (req, res) => {
  const name = req.body.name;
  const room_type = Number(req.body.room_type);
  const no_of_rooms = req.body.no_of_rooms;
  const mb_no = req.body.mb_no;
  const start_date = Date.parse(req.body.start_date);
  const end_date = Date.parse(req.body.end_date);

  const newBooking = new Booking({
    name,
    room_type,
    no_of_rooms,
    mb_no,
    start_date,
    end_date,
  });

  newBooking
    .save()
    .then(() => res.json("Online Booking Done!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
