const express = require('express');

const {connectMongoDb}= require("./connecction");

const {logReqRes} = require("./middleware")

const userRoute = require('./routes/user');

const app = express();
const PORT = 8000;

// connection
connectMongoDb('mongodb+srv://vishalverma36951:Vicky2003@cluster0.xdxxqnn.mongodb.net/').then(()=> console.log("Mongo DB Connected!")
);

//middleware- plugin
app.use(express.urlencoded({extended: false}))

app.use(logReqRes("log.txt"));


//Routes

app.listen(PORT , ()=> console.log(`Server startd at PORT: ${PORT}`))

app.use('/api/users', userRoute)


//nodemon for auto server start after any change