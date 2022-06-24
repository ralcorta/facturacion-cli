const Afip = require('@afipsdk/afip.js');

module.exports = function (config) {
    const options = config || {};
    if (!options.CUIT) {
        const msg = `[AFIP] ERROR: Cuit must be with something.`;
        console.log(chalk.red.bold(msg));
        throw new Error(msg);
    }
    return new Afip(options);
}


