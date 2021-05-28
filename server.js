const express = require("express");
// const bodyParser = require('body-parser')
const path = require("path");
const http = require("http");

var bp = require("body-parser");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
const fs = require("fs");
const socketIo = require("socket.io");
const index = require("./routes.js");
const PORT = 8080;

app.use(index);
const server = http.createServer(app);

const io = socketIo(server);

let interval;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  // const response = new Date();
  // let response = [];
  // response = [...response, rows];
  // socket.emit("MyData", response);
  // Emitting a new message. Will be consumed by the client
};

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// app.listen(PORT);
