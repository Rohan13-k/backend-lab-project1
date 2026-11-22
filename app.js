

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

const number = 10;

logger("Checking the number...");

if (isEven(number)) {
    logger(number + " is Even");
} else {
    logger(number + " is Odd");
}