const afipFactory = require('../afip/afip.factory');

module.exports = async function getBill(invoice, salepoint, type, afipOpt = {}) {
	if (!invoice) throw new Error('[StrictValidation] The invoice parameter must be something');
	if (!salepoint) throw new Error('[StrictValidation] The salepoint parameter must be something');
	if (!type) throw new Error('[StrictValidation] The type parameter must be something');

	return afipFactory(afipOpt).ElectronicBilling.getVoucherInfo(invoice, salepoint, type);
};
