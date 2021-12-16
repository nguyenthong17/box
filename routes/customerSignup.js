const router = require("express").Router();
const Customer = require('../models/Customer')
const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')
const {isEmpty, is8Chars, hasSpace} = require('../middleware/inputValidation')

const saltRound = 10

router.post("/customer", (req, res, next) => {
  const { email, password, firstName, lastName, street, houseNumber, postcode, city } = req.body;
  
  if  (isEmpty(email) || isEmpty(firstName) || isEmpty(lastName) || isEmpty(password)
        || isEmpty(street) || isEmpty(houseNumber) || isEmpty(postcode) || isEmpty(city)) {
    return res.status(400).json({message: 'Input field cannot be empty'})
  }

  if (hasSpace(email)) {
    return res.status(400).json({message: 'Email format is not correct'})
  }

  if (!is8Chars(password)) {
    return res.status(400).json({message: 'Password must have at least 8 characters'})
  }
  
  Customer.findOne({email})
          .then (foundCustomer => {
            if(foundCustomer) {
              return res.status(400).json({message: 'Email has been used'})
            }

            const salt = bcrypt.genSaltSync(saltRound);
            const hashedPassword = bcrypt.hashSync(password, salt);

            Customer.create({
              email,
              password: hashedPassword,
              firstName,
              lastName,
              street,
              houseNumber,
              postcode,
              city
            }).then(result => res.status(200).json({message: 'created'}))
            .catch(err => res.status(500).json({message:'Internal Server Error'}));
          })
});

router.post("/admin", (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;
  const salt = bcrypt.genSaltSync(saltRound);
  const hashedPassword = bcrypt.hashSync(password, salt);
  Admin.create({
    username,
    password: hashedPassword,
    firstName,
    lastName
  }).then((createdAdmin) => res.json(createdAdmin));
});

module.exports = router;