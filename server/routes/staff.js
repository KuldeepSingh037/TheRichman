const router = require("express").Router();
let Staff = require("../models/staff");

router.post("/login", async (request, response) => {
  try {
    const data = {
      name: request.body.username,
      pwd: request.body.pwd,
    };

    console.log(data);

    const newLogin = await Staff.create(data);
    return response.status(201).send(newLogin);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/check-login", async (request, response) => {
  try {
    const data = {
      name: request.body.username,
      pwd: request.body.pwd,
    };
    console.log(data);

    Staff.find(data).then((res) => {
      console.log("data found");
      console.log(res);
      return response.status(201).send("Data found");
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

module.exports = router;
