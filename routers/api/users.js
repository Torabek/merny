/// handle authentication only
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcryptjs = require('bcryptjs')
// @routes GET api/users/test
// @desc Test users route
// @access PUBLIC

router.get("/test", (req, res) => {
  res.json({
    msg: "users work"
  });
});


// @routes POST api/users/login
// @desc Login User
// @access PUBLIC

router.post('/login', (req, res) => {

  //find user by email
  const condidate = User.findOne({
      email: req.body.email
    })
    .then(user => {
      // check for user
      if (!user) {
        return res.status(404).json({
          email: "user not found"
        });
      }
      // password checking
      bcryptjs.compare(req.body.password, user.password)
        .then(isMatch => {
          if (isMatch) {
            res.json({
              msg: "Success"
            });
          } else {
            res.status(400).json({
              password: "password didnot match"
            })
          }
        });


    })


});




// @routes POST api/users/register
// @desc register users
// @access PUBLIC

router.post('/register', (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "email already exist"
      });
    } else {

      const avatar = gravatar.url(req.body.email, {
        s: '200', //kattaligi size
        r: 'pg', // rating
        default: "mm"
      });

      const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newuser.password, salt, (err, hash) => {
          if (err) throw err;
          newuser.password = hash;
          newuser.save()
            .then(user => {
              res.json(user)
            })
            .catch(err => console.log(err));
        })
      });

    }
  })

});


module.exports = router;