const Package = require("./../db/package")

async function addPackage(packageModel) {
    let package = new Package({
        ...packageModel
    });
    await package.save();
    return package.toObject();
}

async function getPackages(){
    const packages = await Package.find();
    return packages.map(packages => packages.toObject());
}

async function getPackage(id){
    const package = await Package.findById(id);
    return package.toObject();
}

async function updatePackage(id, packageModel) {
    const filter = {_id:id};
    await Package.findOneAndUpdate(filter, packageModel);
}

async function deletePackage(id){
    const package = await Package.findByIdAndDelete(id);
}
module.exports = {addPackage, getPackages, getPackage, updatePackage, deletePackage}