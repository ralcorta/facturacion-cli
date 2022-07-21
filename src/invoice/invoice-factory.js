const config = require("../config")();
const { Invoice } = require("./invoice");

class InvoiceFactory {
    static create({ price }) {
        if (price > config.thresholds.invoice.pricing.top)
            throw new Error(`[StrictValidation] The price of invoices must be less than $${config.thresholds.invoice.pricing.top}}`);
        if (price < config.thresholds.invoice.pricing.bottom)
            throw new Error(`[StrictValidation] The price of invoices must be higher than $${config.thresholds.invoice.pricing.bottom}}`);

        return new Invoice({ price })
    }
}

module.exports = {
    InvoiceFactory
}