const loger = require("../loger");

class BaseError extends Error {
    constructor(msg) {
        super(msg);
        loger.error(msg);
        loger.error(this.stack);
    }
}

module.exports = BaseError