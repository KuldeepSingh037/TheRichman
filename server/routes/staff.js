const router = require("express").Router();
let Staff = require("../models/staff");

router.post("/check-login", (req, res) => {
  try {
    const { username, pwd } = req.body;

    Staff.findOne({ username: username }).then((user) => {
      if (user) {
        if (user.pwd === pwd) {
          res.sendStatus(200);
        } else {
          res.send("Wrong");
        }
      } else {
        res.send("User not registered");
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
