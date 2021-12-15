const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    password: String,
    firstName: String,
    lastName: String,
    street: String,
    houseNumber: String,
    postcode: Number,
    city: String
  },
  {
    timestamps: true,
  }
);

const Customer = model("Customer", customerSchema);

module.exports = Customer;
