// let n1 = 2;
// let n2 = 7;
// console.log(n1 ** n2);
// let n1 = 10;
// let n2 = 3;
// console.log(n1 % n2);
// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);
// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }
  
//   let ball: Ball = { diameter: 10 };
//   let sphere: Sphere = { diameter: 20 };
  
//   sphere = ball;
//   ball = sphere;


   
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
  
//   let tube: Tube = { diameter: 12, length: 3 };
  
// //   tube = ball;//Error
//   ball = tube;
// function error(message: string): never {
//   throw new Error(message);
// }
// console.log(
// error("hdgzz"))
// let myname: unknown ='a';
// console.log((myname as string).length);
// console.log((<string> myname).length)
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);