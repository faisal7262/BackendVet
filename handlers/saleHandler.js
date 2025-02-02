const Sale = require('../db/sale');

async function addSale(saleModel) {
    let sale = new Sale({
        ...saleModel
    });
    await sale.save();
    return sale.toObject();
}

async function getSales(){
    const sales = await Sale.find();
    return sales.map(sales => sales.toObject());
}

async function getSale(id){
    const sale = await Sale.findById(id);
    return sale.toObject();
}

async function updateSale(id, saleModel) {
    const filter = {_id:id};
    await Sale.findOneAndUpdate(filter, saleModel);
}

module.exports = {addSale, getSales, getSale, updateSale}