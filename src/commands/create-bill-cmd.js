const createBill = require('../bill-create');
const chalk = require('chalk');
const boxen = require('boxen');
require('dotenv').config();

const boxenOptions = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
	borderColor: 'green',
	backgroundColor: '#555555'
};

module.exports = async function (yargs) {
	const options = yargs
		.usage('usage: $0 create [options]')
		.option('n', { alias: 'amount', describe: 'Amount of invoices', type: 'number', demandOption: true })
		.option('p', { alias: 'price', describe: 'Price of invoices', type: 'number', demandOption: true })
		.option('s', { alias: 'show', describe: 'Shwo invoices created', type: 'boolean', demandOption: false })
		.option('prod', {
			alias: 'production',
			describe: 'Use production env',
			type: 'boolean',
			demandOption: false
		})
		.help('help')
		.wrap(null).argv;

	try {
		console.log(chalk.yellow.bold(`[AFIP] Environment: ${options.prod ? 'Production' : 'Testing'}`));
		console.log(chalk.blue.bold(`[AFIP] Generating ${options.n} invoices of $${options.p} ...`));
		const conf = {
			production: options.prod,
			res_folder: process.env.RES_FOLDER,
			cert: process.env.CERT,
			key: process.env.KEY,
			CUIT: process.env.CUIT
		};
		const bills = await createBill(options.n, options.p, conf);
		console.log(
			boxen(
				chalk.green.bold(`[AFIP] ${options.n} invoices created. Total: $${options.n * options.p}`),
				boxenOptions
			)
		);
		if (options.s) {
			console.dir(bills, { depth: 50 });
		}
	} catch (error) {
		console.log(chalk.red.bold(`[AFIP] ERROR: ${error.message}`));
		console.log(error);
	}
};
