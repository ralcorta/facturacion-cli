const Afip = require('@afipsdk/afip.js');
const loger = require('../loger');
const BaseError = require('../error');

module.exports = function (config) {
    const options = config || {};
    if (!options.CUIT) {
        const msg = `[AFIP] ERROR: Cuit must be with something.`;
        loger.error(msg);
        throw new BaseError(msg);
    }
    return new Afip(options);
}


