const getBill = require('../bills/bill-get');
const chalk = require('chalk');
const loger = require('../loger');
const BaseError = require('../error');

module.exports = async function (yargs) {
	const options = yargs
		.usage('usage: $0 info [options]')
		.option('i', { alias: 'invoice', describe: 'Invoice number', type: 'number', demandOption: true })
		.option('s', { alias: 'salepoint', describe: 'Sale point number', type: 'number', demandOption: true })
		.option('t', { alias: 'type', describe: 'Type invoice', type: 'number', demandOption: true })
		.option('prod', {
			alias: 'production',
			describe: 'Use production env',
			type: 'boolean',
			demandOption: false
		})
		.help('help')
		.wrap(null).argv;

	try {
		const voucherInfo = await getBill(options.i, options.s, options.t);
		loger.success(`[AFIP] Invoices info:`)
		loger.default(voucherInfo)
	} catch (error) {
		throw new BaseError(`[AFIP] ERROR: ${error.message}`)
	}
};
