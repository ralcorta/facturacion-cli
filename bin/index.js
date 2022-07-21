#! /usr/bin/env node

const yargs = require('yargs');
const cmdWrapper = require('../src/cmd/cmd-wrapper')

yargs
	.usage('usage: $0 <command>')
	.command('create', 'create a new invoice', cmdWrapper().createInvoiceCmd)
	.command('info', 'Get info from some data', cmdWrapper().infoInvoiceCmd)
	.help('help')
	.wrap(null).argv;
