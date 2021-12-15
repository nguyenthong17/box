const router = require("express").Router();
const { isAuthenticated } = require("../../middleware/verifyToken");

router.get("/verify", isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
