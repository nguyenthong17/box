const router = require('express').Router()
const Order = require('../models/Order')



router.get('/:driverId',(req, res, next) => {
  const {driverId} = req.params
  Order.find({driverId, delivered: false})
      .then(ordersFromDB => res.status(200).json({orders: ordersFromDB}))
      .catch(err => res.status(500).json({message: 'Internal Server Error'}))  
});

router.put('/order/:orderId',(req, res, next) => {
  const {delivered} = req.body
  console.log(req.body)
  console.log(delivered)
  Order.findByIdAndUpdate(req.params.orderId, {delivered},{new:true})
      .then(updatedOrder => res.status(200).json({message: 'Order delivered'}))
      .catch(err => res.status(500).json({message: 'Internal Server Error'}))
});


module.exports = router;