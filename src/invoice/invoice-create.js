const { InvoiceFactory } = require('./invoice-factory');
const config = require('../config')();
const loger = require('../loger');

module.exports = async function createInvoice(amount, price, afipOpt = {}) {
	if (amount > config.thresholds.invoice.amount)
		throw new Error('[HelpValidation] The amount of invoices created on the same time should be less or equal than 20.');
	if (amount <= 0)
		throw new Error('[Validation] The amount of invoices created on the same time should be higher than 0.');

	invoice = InvoiceFactory.create({ price });

	const vouchers = [];
	for (let i = 0; i < amount; i++) {
		vouchers.push(await invoice.save(afipOpt));
		loger.info(`[AFIP] Invoice ${i + 1} created.`)
	}
	return vouchers;
};
