#! /usr/bin/env node

const yargs = require('yargs');
const createBillCmd = require('../src/commands/create-bill-cmd');
const infoBillCmd = require('../src/commands/info-bill-cmd');
const pjson = require('../package.json');
const chalk = require('chalk');
console.log(chalk.green.bold(`[CLI] Version: ${pjson.version}`));
// const boxen = require('boxen');

// const boxenOptions = {
// 	padding: 1,
// 	margin: 1,
// 	borderStyle: 'round',
// 	borderColor: 'green',
// 	backgroundColor: '#555555'
// };

yargs
	.usage('usage: $0 <command>')
	.command('create', 'create a new invoice', createBillCmd)
	.command('info', 'Get info from some data', infoBillCmd)
	.help('help')
	.wrap(null).argv;
