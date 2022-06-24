const boxen = require('boxen');
const chalk = require('chalk');

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: '#555555'
};

module.exports = {
    default: (...params) => console.log(...params),
    success: (...params) => console.log(chalk.green.bold(...params)),
    error: (...params) => console.log(chalk.red.bold(...params)),
    info: (...params) => console.log(chalk.cyan.bold(...params)),
    warn: (...params) => console.log(chalk.yellow.bold(...params)),
    blue: (...params) => console.log(chalk.blue.bold(...params)),
    box: (text, boxenParam) => console.log(
        boxen(
            text,
            boxenParam ? boxenParam : boxenOptions
        )
    ),
    dir: (param, opt = {}) => console.dir(param, { depth: 50, ...opt })
}