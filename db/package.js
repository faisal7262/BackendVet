const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    packageAmount: Number,
    min:Number,
    max:Number,
});

const Package=mongoose.model('packages',packageSchema);
module.exports=Package;