"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logWarriors(greeting, ...names) {
    console.log(`${greeting}, ${name}!`);
}
const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
console.log(logWarriors("Hello", ...warriors));
const birthYears = [1844, 1840, 1583];
logWarriors("Born in", ...birthYears);
