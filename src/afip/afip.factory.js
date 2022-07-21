const Afip = require('@afipsdk/afip.js');
const BaseError = require('../error');
const config = require('../config');

module.exports = function (configParam = {}) {
    const options = {
        ...config().credentials,
        ...configParam
    };
    if (!options.CUIT)
        throw new BaseError(`[AFIP] ERROR: Cuit param must be completed.`);

    return new Afip(options);
}


