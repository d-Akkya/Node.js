const sayHello = require("./app")
const color = require("cli-color")
const chalk = require("chalk")

const warning = chalk.red;

console.log(color.blue("Hello World"));
sayHello();
console.log(warning("Akkya"));