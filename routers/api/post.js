// user comment and post willl be handled from here
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// @routes GET api/posts/test
// @desc Test post route
// @access PUBLIC

router.get("/test", (req, res) => {
  res.json({
    msg: "posts work"
  });
});

module.exports = router;