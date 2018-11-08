/// handle authentication only
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// @routes GET api/users/test
// @desc Test users route
// @access PUBLIC

router.get("/test", (req, res) => {
  res.json({
    msg: "users work"
  });
});


module.exports = router;