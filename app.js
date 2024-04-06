#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome to CodeWithBhagwati - Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guess number(limit form 1 till 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log('congratulation! you guess correct number');
}
else {
    console.log('sorry, try again you guess wrong number');
}
