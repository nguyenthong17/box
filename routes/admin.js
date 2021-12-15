const router = require("express").Router();
const bcrypt = require('bcrypt')
const Driver = require('../models/Driver')
const Admin = require('../models/Admin')
const tokenGen = require("./authentication/tokenGen");
const {isEmpty, is8Chars, hasSpace} = require('../middleware/inputValidation')

const saltRound = 10;

// router.post("/signup", (req, res, next) => {
//   const { username, password, firstName, lastName } = req.body;
//   const salt = bcrypt.genSaltSync(saltRound);
//   const hashedPassword = bcrypt.hashSync(password, salt);
//   Admin.create({
//     username,
//     password: hashedPassword,
//     firstName,
//     lastName
//   }).then((createdAdmin) => res.json(createdAdmin));
// });

//create new driver
router.post('/driver',(req, res, next) => {
  const {username, password, firstName, lastName, picture} = req.body

  if (isEmpty(username) || isEmpty(password) || isEmpty(firstName) || isEmpty(lastName)){
    res.status(400).json({message: 'All input fields are required!'})
    return
  }

  if (hasSpace(username)) {
    res.status(400).json({message: 'Username cannot contain space'})
    return
  }

  if (!is8Chars(password)) {
    res.status(400).json({message: 'Password must have at least 8 characters!'})
    return
  }
  
  Driver.findOne({username})
        .then (foundDriver => {
          if (foundDriver) {
            res.status(400).json({message: 'Username already exists. Please choose different username'})
            return
          }

          const salt = bcrypt.genSaltSync(saltRound)
          const hashedPass = bcrypt.hashSync(password, salt)
        
          Driver.create ({
                            username,
                            password: hashedPass,
                            firstName,
                            lastName,
                            picture
                          })
      }).then(result => res.status(200).json({message: 'created'}))
      .catch(err => res.status(500).json({message: 'Internal Server Error'}))
});

//get all driver
router.get('/driver',(req, res, next) => {
  
});



module.exports = router;