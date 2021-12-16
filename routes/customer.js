const router = require("express").Router();
const Order = require("../models/Order");
const { isEmpty } = require("../middleware/inputValidation");

router.get("/:customerId", (req, res, next) => {
  const customerId = req.params.customerId;
  Order.find({ customerId })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.post("/order", (req, res, next) => {
  const { content, customerId, address } = req.body;

  if (isEmpty(content)) {
    res.status(400).json({ message: "Order content cannot be empty" });
    return;
  }

  Order.create({ content, customerId, address })
    .then((response) => res.status(200).json({ message: "Order is sent" }))
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.get("/order/:id", (req, res, next) => {
  Order.findById(req.params.id)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

router.put("/order/:id", (req, res, next) => {
  const { newContent } = req.body;
  Order.findByIdAndUpdate(req.params.id, { content: newContent }, { new: true })
    .then((response) => {
      res.status(200).json({ message: "Order is updated" });
    })
    .catch((err) => res.status(500).json({ message: "Internal Server Error" }));
});

module.exports = router;
