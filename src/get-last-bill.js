const afipFactory = require('./afip-owner');

module.exports = function(options) {
	return afipFactory(options).ElectronicBilling.getLastVoucher(2, 11);
};
