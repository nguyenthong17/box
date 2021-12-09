const router = require("express").Router();
const bcrypt = require("bcrypt");
const tokenGen = require("./tokenGen");
const Admin = require("../../models/Admin");
const { isAuthenticated } = require("../../middleware/verifyToken");

const saltRound = 10;

//TODO: Edit admin Homepage
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

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

router.post("/login", (req, res, next) => {
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
            const payload = { _id, username, firstName, lastName, userType:'admin' };

            const authToken = tokenGen(payload);
            res.status(200).json({ authToken });
          } else
            res.status(400).json({ message: "Username/Password invalid!" });
        })
        .catch((err) =>
          res.status(500).json({ message: "Internal Server Error" })
        );
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
