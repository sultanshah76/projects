#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let flag=true; 
let score=0;
(async function (){await showBanner("guessing game","enter number","red")
await guessingnumber()})
();

async function guessingnumber() {
    while (flag) {
let numgess=Math.ceil(Math.random()*4+1)
let user= await inquirer.prompt([{
"name":"usernumber",
"type":"number",
"message":chalk.bgYellow(" Guess number between one to five")}]);
if (numgess===user.usernumber) {console.log(chalk.bgGreen("you guess right one"))
score+=10
console.log(chalk.bgBlue(`your present score"${score}"`));
}
else{console.log (chalk.bgRed("try again!!")) 
flag=false}
}};

