const express = require("express");

// import hubs-model file

const Hubs = require("./data/hubs-model"); // use hubs to get access to database
// Hubs has a find(), findById(), add(), remove(), update() methods
// which we will use to access the database

const server = express();

// add this line to teach express to parse JSON
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello web 20.75");
});

// see a list of hubs (channel)
// returns a list of hubs
server.get("/hubs", (req, res) => {
  // returns a promise
  Hubs.find()
    .then(hubs => {
      // .json will convert the data passed to JSON
      // also tells the client we're sending JSON through an HTTP header (content-type)
      res.status(200).json(hubs);
    })
    .catch(error => {
      res.status(500).json({ message: "error getting the list of hubs" });
    });
});

// create a hub
server.post("/hubs", (req, res) => {
  // http message is an object with headers and body => { headers: {}, body : { // data sent by client } }

  const hubInfo = req.body;
  console.log("hub info from body", hubInfo);
  Hubs.add(hubInfo)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json({ message: "error adding new hub" });
    });
});

// delete a hub

// update a hub

const port = 8000;
server.listen(port, () => {
  console.log("api running");
});
