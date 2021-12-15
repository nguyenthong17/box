const { Schema, model } = require("mongoose");

const driverSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    firstName: String,
    lastName: String
  },
  {
    timestamps: true,
  }
);

const Driver = model("Driver", driverSchema);

module.exports = Driver;
