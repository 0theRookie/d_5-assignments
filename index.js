var chalk = require("chalk");

var message = chalk.green("Hello ") + chalk.yellow("World");

var mess = chalk.bold.red('ghfdoufhabdofjhavdfoauf');

var testingLimits = chalk.inverse.magentarBright('wow this is sure somethin');

console.log(message);
console.log(mess);
console.log(chalk.strikethrough(chalk.dim(chalk.bold(chalk.underline(chalk.italic(testingLimits))))));