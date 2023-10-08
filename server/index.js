const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });

const app = express();
const uri = process.env.ATLAS_URI;

// app.use(express());
// app.use(bodyParser.json());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(cors());

app.use("/online-booking", require("./routes/onlineBooking"));

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => console.log("Database connection error: " + err));
