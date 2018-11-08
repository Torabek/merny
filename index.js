const express = require("express");
const mongooes = require("mongoose");

const app = express();

app.get('/', (req, res) => {
  res.send("Bekhruz");
});

app.post('/', (req, res) => {
  res.send("Bekrhus post")
})

app.listen(5000, () => {
  console.log("server is running on port 5000");
});