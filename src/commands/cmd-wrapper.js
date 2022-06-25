const createBillCmd = require('../commands/cmd-create-bill');
const infoBillCmd = require('../commands/cmd-info-bill');
const loger = require('../loger');

module.exports = () => {
    loger.success(`[CLI] Starting...`)
    return {
        createBillCmd,
        infoBillCmd
    }
};
