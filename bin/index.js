#! /usr/bin/env node

const yargs = require('yargs');
const createBillCmd = require('../src/commands/cmd-create-bill');
const infoBillCmd = require('../src/commands/cmd-info-bill');
const pjson = require('../package.json');
const loger = require('../src/loger')

loger.success(`[CLI] Version: ${pjson.version}`)

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
