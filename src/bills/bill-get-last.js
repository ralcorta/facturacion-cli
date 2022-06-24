const afipFactory = require('./afip/afip.factory');

module.exports = function (options) {
	return afipFactory(options).ElectronicBilling.getLastVoucher(2, 11);
};
