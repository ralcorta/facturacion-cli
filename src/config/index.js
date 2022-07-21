require('dotenv').config();

module.exports = (prod = false) => ({
    credentials: {
        production: prod,
        res_folder: process.env.RES_FOLDER,
        cert: process.env.CERT,
        key: process.env.KEY,
        CUIT: process.env.CUIT
    },
    thresholds: {
        invoice: {
            pricing: {
                top: 20000,
                bottom: 1
            },
            amount: 20
        }
    }
});