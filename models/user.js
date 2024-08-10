const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique email addresses
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true, // Ensures unique roll numbers
  },
  trainer: {
    type: String,
    required: true,
  },
  batchNo: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    default: Date.now, // Automatically sets the date when the user is created
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
