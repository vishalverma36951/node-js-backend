const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true,
    },
    LastName:{
        type: String,
    },
    email:{
        type:String,
        require: true,
        unique: true,
    },
    Gender:{
        type: String,
        require:true
    },
    JobTitle: {
        type: String,
        require:true,
    },
},
    {timestamps: true}
);

const User = new mongoose.model('User',Userschema);

module.exports = User;