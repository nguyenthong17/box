const jwt = require("jsonwebtoken");

const tokenGen = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: "12h",
  });
};

module.exports = tokenGen;
