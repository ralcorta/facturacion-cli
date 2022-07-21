const afipFactory = require('../afip/afip.factory');
const { Invoice } = require('./invoice');

module.exports = async function getInvoice(invoice, salepoint, type, afipOpt = {}) {
	return Invoice.get(afipOpt, invoice, salepoint, type)
};
