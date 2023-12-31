const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
