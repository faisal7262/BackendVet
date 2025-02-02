const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const productRoutes = require('./routes/product-routes');
const packageRoutes = require('./routes/package-routes');
const saleRoutes = require('./routes/sale-routes');
var cors = require("cors");

// add cors for cross origin issue
app.use(cors());
// middleware for sending json format
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running !')
})

// declare routes call
app.use(userRoutes);
app.use(productRoutes);
app.use(packageRoutes);
app.use(saleRoutes);

// mongo db configurations......
async function connectDb(){
   await mongoose.connect("mongodb+srv://samsung773757:mLACU0nyDet6UowS@veternarydb.c4kru.mongodb.net/",{
        dbName: "VeternaryDb",
    });
}



connectDb().catch((err) => console.error(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

