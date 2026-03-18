const  express = require("express");
const cookieParser = require("cookie-parser");

// require routes
const authRouter = require("../src/routes/auth.routes.js");

const app = express();



// middleware 
app.use(express.json());
app.use(cookieParser());



// use routes 
app.use("/api/auth", authRouter);











module.exports = app;