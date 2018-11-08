const express = require("express");
const mongoose = require("mongoose");

const app = express();
// require from /routes/api

const users = require('./routers/api/users');
const profile = require('./routers/api/profile');
const posts = require('./routers/api/post');

//DB config
const db = require('./config/keys').mongoURI

// connect to mongodb 
mongoose.connect(db)
  .then(() => console.log("Mongo db connected"))
  .catch(() => {
    console.log("error")
  });

// use ROutes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);



app.get('/', (req, res) => {
  res.send("Bekhruz");
});

app.listen(5000, () => {
  console.log("server is running on port 5000+sos osos ");
});