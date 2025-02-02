const express = require("express");
const router = express.Router();
const {addSale, getSales, getSale, updateSale} = require("./../handlers/saleHandler");


router.post("/sales", async (req, res) => {
   let sale = await addSale(req.body)
    res.send(sale);
})

router.get("/sales", async (req, res) => {
    let sales = await getSales();
    res.send(sales);
 })
 
 router.get("/sales/:id", async (req, res) => {
     console.log('id',req.params['id']);
     let sale = await getSale(req.params['id']);
     res.send(sale);
  })

  router.put("/sales/:id", async (req, res) => {
    console.log('id',req.params['id']);
    await updateSale(req.params['id'], req.body);
    res.send({});
 })

module.exports = router;