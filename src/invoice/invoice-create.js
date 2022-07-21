const afipFactory = require('../afip/afip.factory');
const loger = require('../loger');
const { Invoice } = require('./invoice');
const config = require('../config')();


module.exports = async function createInvoice(amount, price, afipOpt = {}) {
	if (price > config.thresholds.invoice.pricing.top) throw new Error('[StrictValidation] The price of invoices must be less than $5.0000');
	if (price < config.thresholds.invoice.pricing.bottom) throw new Error('[StrictValidation] The price of invoices must be higher than $0');

	if (amount > config.thresholds.invoice.amount)
		throw new Error(
			'[HelpValidation] The amount of invoices created on the same time should be less or equal than 20.'
		);

	if (amount <= 0)
		throw new Error('[Validation] The amount of invoices created on the same time should be higher than 0.');

	const vouchers = [];
	for (let i = 0; i < amount; i++) {
		const invoice = new Invoice({ price })
		const res = await afipFactory(afipOpt).ElectronicBilling.createNextVoucher(invoice, true);
		loger.info(`[AFIP] Invoice ${i + 1} created.`)
		vouchers.push(res);
	}
	return vouchers;
};
