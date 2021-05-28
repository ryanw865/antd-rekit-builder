const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

router.post("/password", (req, res) => {
  // let password = req.body.password;
  // console.log("Password is " + req);
  if (between(0, 2) % 2 === 1) {
    res.send("weak");
  } else {
    res.send("strong");
  }
  // if (password.length > 0) {
  //   res.end("weak");
  // } else if (password.length > 5 && password.length < 10) {
  //   res.end("strong");
  // } else {
  //   res.end("very strong");
  // }
});

router.post("/username", (req, res) => {
  // let username = req.body.user;
  // console.log("User name = " + username);
  if (between(0, 2) % 2 === 1) {
    res.end("available");
  } else {
    res.send("unavailable");
  }
});

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
