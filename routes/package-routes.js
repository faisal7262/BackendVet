const express = require("express");
const router = express.Router();
const {addPackage, getPackages, getPackage, updatePackage, deletePackage} = require("./../handlers/packageHandler");


router.post("/packages", async (req, res) => {
   let package = await addPackage(req.body)
    res.send(package);
})

router.get("/packages", async (req, res) => {
   let packages = await getPackages();
   res.send(packages);
})

router.get("/packages/:id", async (req, res) => {
    console.log('id',req.params['id']);
    let package = await getPackage(req.params['id']);
    res.send(package);
 })

 router.put("/packages/:id", async (req, res) => {
    console.log('id',req.params['id']);
    await updatePackage(req.params['id'], req.body);
    res.send({});
 })

 router.delete("/packages/:id", async (req, res) => {
    console.log('id',req.params['id']);
    await deletePackage(req.params['id']);
    res.send({});
 })

module.exports = router;