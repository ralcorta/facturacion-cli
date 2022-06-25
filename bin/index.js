#! /usr/bin/env node

const yargs = require('yargs');
const cmdWrapper = require('../src/commands/cmd-wrapper')

yargs
	.usage('usage: $0 <command>')
	.command('create', 'create a new invoice', cmdWrapper().createBillCmd)
	.command('info', 'Get info from some data', cmdWrapper().infoBillCmd)
	.help('help')
	.wrap(null).argv;
