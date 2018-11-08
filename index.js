const express = require("express");
const mongooes = require("mongoose");

const app = express();

app.get('/', (req, res) => {
  res.send("Bekhruz");
});

app.listen(5000, () => {
  console.log("server is running on port 5000+sos osos ");
});