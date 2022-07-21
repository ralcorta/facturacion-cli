const afipFactory = require('../afip/afip.factory');
const { Invoice } = require('./invoice');

module.exports = function (options) {
	return Invoice.getLast(options);
};
