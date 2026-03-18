const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User Name Must Be Required!"],
    unique: [ true, "User name already exists" ],
  },

  email: {
    type: String,
    unique: [true, "Email is already exists"],
    required: [true, "Email is Required!"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
})


const userModels = mongoose.model("users", userSchema);


module.exports = userModels;