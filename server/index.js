const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("My error: " + err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established securely.");
});

const exercisesRouter = require("./routes/exercises");

app.use("/exercises", exercisesRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
