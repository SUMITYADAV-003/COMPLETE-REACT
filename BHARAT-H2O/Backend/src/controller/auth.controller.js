const userModels = require("../models/user.models.js");
const bcrypt  = require("bcrypt");
const jwt = require('jsonwebtoken');




async function registerController(req,res) {
  const {username, email, password} = req.body;
    const isUserAlreadyExists  = await userModels.findOne({
      $or: [
            { username },
            { email }
        ]
  });

  if(isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists " + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
    })
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModels.create({
    username,
    password: hash,
    email,
  })
  
  const token = jwt.sign({
    id: user._id,
    user: user.username,
  },process.env.JWT_SECRETS, {expiresIn: "1d"});
  
  res.cookie("token", token);

  res.status(200).json({
    message: "User Registered  Sucessfully",
    user: {
      username: user.username,
      email: user.email
    }
  })
}

async function loginController(req,res) {
  const {username, email, password} = req.body;

     const user = await userModels.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if(!user) {
      return res.status(404).json({
        message: "user not found",
      })
    }

    const isPasswordVaild =  await bcrypt.compare(password, user.password);

    if(!isPasswordVaild){
      return res.status(401).json({
        message: "Password Invalide",
      })
    }

    const token = jwt.sign({
      token: user._id,
      username: user.username,
    }, process.env.JWT_SECRETS, {expiresIn: "1d"});

    res.cookie("token", token);

    res.status(200).json({
      message: " User Loggin Sucessfully",
      user: {
        username: user.username,
        email: user.email,
      }
    })




}







module.exports = {
  registerController,
  loginController,
}