const router = require("express").Router();
const bcrypt = require('bcrypt')
const Driver = require('../models/Driver')
const Admin = require('../models/Admin')
const tokenGen = require("./authentication/tokenGen");
const {isEmpty, is8Chars, hasSpace} = require('../middleware/inputValidation')

router.post("/admin", (req, res, next) => {
  const { username, password } = req.body;

  Admin.findOne({ username })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: "Username/Password invalid!" });
        return;
      }

      bcrypt
        .compare(password, foundUser.password)
        .then((result) => {
          if (result) {
            const { _id, username, firstName, lastName } = foundUser;
            const payload = { _id, username, firstName, lastName, userType:'admin'};

            const authToken = tokenGen(payload);
            res.status(200).json({ authToken });
          } else
            res.status(400).json({ message: "Username/Password is invalid!" });
        })
        .catch((err) =>
          res.status(500).json({ message: "Internal Server Error" })
        );
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.post('/driver',(req, res, next) => {
  const {username, password} = req.body
  
  Driver.findOne({username})
        .then(foundDriver => {
          if(!foundDriver) {
            res.status(400).json({message: 'Unsername/Password is invalid'})
          }

          bcrypt.compare(password, foundDriver.password)
                .then(result => {
                  if (result) {
                    const { _id, username, firstName, lastName } = foundDriver;
                    const payload = { _id, username, firstName, lastName, userType:'driver'};

                    const authToken = tokenGen(payload);
                    res.status(200).json({ authToken });
                  } else {
                    res.status(400).json({ message: "Username/Password is invalid!" })
                  }
                })
                .catch(err => res.status(500).json({ message: "Internal Server Error" }))
        })
        .catch(err => res.status(500).json({message: 'Internal Server Error'}))
});


module.exports = router;