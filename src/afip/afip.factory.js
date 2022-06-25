const Afip = require('@afipsdk/afip.js');
const BaseError = require('../error');
const config = require('../config');

module.exports = function (configParam = {}) {
    const options = {
        ...config(),
        ...configParam
    };
    if (!options.CUIT) {
        const msg = `[AFIP] ERROR: Cuit must be with something.`;
        throw new BaseError(msg);
    }
    return new Afip(options);
}


