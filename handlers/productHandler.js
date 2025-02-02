const Product = require("./../db/product")

async function addProduct(productModel) {
    let product = new Product({
        ...productModel
    });
    await product.save();
    return product.toObject();
}

async function getProducts(){
    const products = await Product.find();
    return products.map(product => product.toObject());
}

async function getProduct(id){
    const product = await Product.findById(id);
    return product.toObject();
}

async function updateProduct(id, productModel) {
    const filter = {_id:id};
    await Product.findOneAndUpdate(filter, productModel);
}

async function deleteProduct(id){
    const product = await Product.findByIdAndDelete(id);
}
module.exports = {addProduct, getProducts, getProduct, updateProduct, deleteProduct}