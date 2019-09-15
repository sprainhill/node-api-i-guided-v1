const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("hello web 20.75");
});

const port = 8000;
server.listen(port, () => {
  console.log("api running");
});
