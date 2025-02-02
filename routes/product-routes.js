const express = require("express");
const router = express.Router();
const {addProduct, getProducts, getProduct, updateProduct, deleteProduct} = require("./../handlers/productHandler");


router.post("/products", async (req, res) => {
   let product = await addProduct(req.body)
    res.send(product);
})

router.get("/products", async (req, res) => {
   let products = await getProducts();
   res.send(products);
})

router.get("/products/:id", async (req, res) => {
    console.log('id',req.params['id']);
    let product = await getProduct(req.params['id']);
    res.send(product);
 })

 router.put("/products/:id", async (req, res) => {
    console.log('id',req.params['id']);
    await updateProduct(req.params['id'], req.body);
    res.send({});
 })

 router.delete("/products/:id", async (req, res) => {
    console.log('id',req.params['id']);
    await deleteProduct(req.params['id']);
    res.send({});
 })

module.exports = router;