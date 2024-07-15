#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    "USD": 1,
    "EUR": 0.89,
    "GBP": 0.77,
    "INR": 74.57,
    "PKR": 278,
};
let user_answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "From_Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        type: "list",
        name: "to",
        message: "To_Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        type: "number",
        name: 'amount',
        message: 'enter amount'
    }
]);
let from_currency = currency[user_answer.from]; //pkr 
let to_currency = currency[user_answer.to]; //to usd 
let amount = user_answer.amount; //1000
let base_amount = amount / from_currency; //1000/280
let result = base_amount * to_currency; //2800*0.89
console.log(Math.floor(result));
