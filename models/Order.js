const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    content: String,
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    },
    driverId: {
      type: Schema.Types.ObjectId,
      ref: 'Driver'
    },
    delivered: {type: Boolean, default: false},
    address: String
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;