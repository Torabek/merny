const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// @routes GET api/profile/test
// @desc Test profile route
// @access PUBLIC

router.get("/test", (req, res) => {
  res.json({
    msg: "profile work"
  });
});


module.exports = router;