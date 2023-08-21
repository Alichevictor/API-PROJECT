const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({

  firstName: {
    type: String,
    required: true,
  },
  
  
  lastName: {
    type: String,
    required: true,
  },
  otherName: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dateofBirth: {
    type: String,
    required: true,
  },
  residentialAddress: {
    type: String,
    required: true,
  },
  statesecurityNumber: {
    type: String,
    required: true,
  },
  nextofkinName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;