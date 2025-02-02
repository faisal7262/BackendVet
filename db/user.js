const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    address: String,
    Dist: String,
    Taluka: String,
    Village: String,
    pin: String
});

const User=mongoose.model('users',userSchema);
module.exports=User;