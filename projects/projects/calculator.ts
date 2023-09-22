import inquirer from "inquirer";
import {addition,subtraction,division,multiplication} from "./functions.js";
import chalk from "chalk";
import showbanner from "node-banner";
import gradient from "gradient-string";
let answer=[
{
name:"num1",
type:"number",
message:chalk.red("enter first value"),
validate:(input:number)=>{
    if (isNaN(input)){
    return "plz enter number:"}
    return true;}
},
{
name:"num2",
type:"number",
message:chalk.blueBright("enter second value"),
validate:(input:number)=>{
    if (isNaN(input)){
    return "plz enter number:"}
    return true;}
},
{
name:"operation",
type:"list",
choices:["additon","subtraction","multiplication","division"],
message:gradient.rainbow("select operation"),
                                    
},
];
let answer2=[
{name:"again",
type:"confirm",
message:"do you want to perform another calculation?"}
];
(async ()=>{
    await showbanner("calculator",'this app can perform addition, subtraction, multiplication and division ', "red" ,"blue")
})();

 async function calculator(){
   let condition=true;
    while (condition) {
        let {num1,num2,operation}= await inquirer.prompt(answer);
        if (operation==="additon") {console.log(`the sum of given values is ${addition(num1,num2)}`);}
        else if(operation==="subtraction") {console.log(`the subtraction of given values is ${subtraction(num1,num2)}`);}
        else if(operation==="multiplication") {console.log(`the multiple of given values is ${multiplication(num1,num2)}`);}
        else if(operation==="division") {console.log(`the division of given values is ${division(num1,num2)}`);}
        let {again}=await inquirer.prompt(answer2)
        condition=again;
    }
}
setTimeout(() => {
    
    calculator();
}, 1000);