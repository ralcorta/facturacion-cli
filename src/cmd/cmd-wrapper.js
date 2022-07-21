const createInvoiceCmd = require('../cmd/cmd-create-invoice');
const infoInvoiceCmd = require('../cmd/cmd-info-invoice');
const loger = require('../loger');

module.exports = () => {
    loger.success(`[CLI] Starting...`)
    return {
        createInvoiceCmd,
        infoInvoiceCmd
    }
};
