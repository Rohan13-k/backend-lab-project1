const crypto = require("crypto");

function rollDice() {
    const diceNumber = crypto.randomInt(1, 7);
    console.log("Dice Rolled:", diceNumber);
}

console.log("Rolling the dice...\n");

//roll the dice 5 times
for (let i = 1; i <= 5; i++) {
    rollDice();
}