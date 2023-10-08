const mongoose = require("mongoose");

const future_bookingsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    room_type: {
      type: Number,
      required: true,
    },
    no_of_rooms: {
      type: String,
      required: true,
    },
    mb_no: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
  }
  // ,
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("Booking", future_bookingsSchema);
