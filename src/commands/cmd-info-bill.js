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
		.option('test', {
			alias: 'test',
			describe: 'Use test env',
			type: 'boolean',
			demandOption: false
		})
		.help('help')
		.wrap(null).argv;

	try {
		const voucherInfo = await getBill(options.i, options.s, options.t, {
			production: !options.test
		});
		loger.success(`[AFIP] Invoices info:`)
		loger.default(voucherInfo)
	} catch (error) {
		new BaseError(`[AFIP] ERROR: ${error.message}`)
	}
};
