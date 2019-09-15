const express = require("express");

// import hubs-model file

const Hubs = require("./data/hubs-model"); // use hubs to get access to database
// Hubs has a find(), findById(), add(), remove(), update() methods
// which we will use to access the database

const server = express();

server.get("/", (req, res) => {
  res.send("hello web 20.75");
});

// see a list of hubs (channel)
// returns a list of hubs
server.get('/hubs', (req, res) => {
  // returns a promise
  Hubs.find().then(hubs => {
    // .json will convert the data passed to JSON
    // also tells the client we're sending JSON through an HTTP header (content-type)
    res.status(200).json(hubs);
  }).catch(error => {
    res.status(500).json({message 'error getting the list of hubs'});
  });
});

// create a hub

// delete a hub

// update a hub

const port = 8000;
server.listen(port, () => {
  console.log("api running");
});
