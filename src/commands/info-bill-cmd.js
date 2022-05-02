const getBill = require('../get-bill');
const chalk = require('chalk');

module.exports = async function(yargs) {
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
		console.log(chalk.green.bold(`[AFIP] Invoices info:`));
		console.log(voucherInfo);
	} catch (error) {
		console.log(chalk.red.bold(`[AFIP] ERROR: ${error.message}`));
		console.log(error);
	}
};
