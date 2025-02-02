const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    min:Number,
    max:Number,
});

const Product=mongoose.model('products',productSchema);
module.exports=Product;