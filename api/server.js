const express = require("express");

const Cookies = require("../cookies/cookiesModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/cookies", (req, res) => {
  Cookies.getAll()
    .then(cookies => {
      res.status(200).json(cookies);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/cookies/:id", (req, res)=> {
  const { id } = req.params;
  Cookies.findById(id)
  .then(cookie => {
    res.status(200).json(cookie);
  })
  .catch(error => {
    res.status(500).json(error);
  })
});

server.post("/cookies", (req, res) => {
  const cookieData = req.body;
  Cookies.insert(cookieData)
  .then(cookies => {
    res.status(201).json(cookies);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new cookie' });
  });
});

server.delete("/cookies/:id", (req, res) => {
  const { id } = req.params;
  Cookies.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json.status(200).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find cookie with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete cookie' });
  });
});

module.exports = server;