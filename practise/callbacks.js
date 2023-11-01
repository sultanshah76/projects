"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callback(data) {
    console.log(data);
}
function fetchdata(callback) {
    let data = ("data");
    setTimeout(() => { callback(data); }, 1000);
}
console.log("before");
fetchdata(callback);
console.log("after");
