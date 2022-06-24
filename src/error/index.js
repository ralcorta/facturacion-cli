const loger = require("../loger");

class BaseError extends Error {
    constructor(...params) {
        super(...params);
        loger.error(msg);
    }
}

module.exports = BaseError