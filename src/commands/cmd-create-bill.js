const createBill = require('../bills/bill-create');
const chalk = require('chalk');
const boxen = require('boxen');
const loger = require('../loger');
const BaseError = require('../error');

module.exports = async function (yargs) {
	const options = yargs
		.usage('usage: $0 create [options]')
		.option('n', { alias: 'amount', describe: 'Amount of invoices', type: 'number', demandOption: true })
		.option('p', { alias: 'price', describe: 'Price of invoices', type: 'number', demandOption: true })
		.option('s', { alias: 'show', describe: 'Shwo invoices created', type: 'boolean', demandOption: false })
		.option('test', {
			alias: 'test',
			describe: 'Use test env',
			type: 'boolean',
			demandOption: false
		})
		.help('help')
		.wrap(null).argv;

	try {
		loger.warn(`[AFIP] Environment: ${options.test ? 'Testing' : 'Production'}`)
		loger.blue(`[AFIP] Generating ${options.n} invoices of $${options.p} ...`)
		const bills = await createBill(options.n, options.p, {
			production: !options.test
		});
		loger.success(`[AFIP] ${options.n} invoices created. Total: $${options.n * options.p}`)
		if (options.s) {
			loger.dir(bills)
		}
	} catch (error) {
		new BaseError(`[AFIP] ERROR: ${error.message}`)
	}
};
