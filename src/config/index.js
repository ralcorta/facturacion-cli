require('dotenv').config();

module.exports = (prod = false) => ({
    production: prod,
    res_folder: process.env.RES_FOLDER,
    cert: process.env.CERT,
    key: process.env.KEY,
    CUIT: process.env.CUIT
});