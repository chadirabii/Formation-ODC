const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    default: 2151,
    max: 9999,
    min: 111,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
  },
  departement: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  adress: {
    street: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
      default: 2151,
      max: 9999,
      min: 111,
    },
  },
});

mongoose.model("User", userSchema);
