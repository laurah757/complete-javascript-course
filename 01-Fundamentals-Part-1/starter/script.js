/*
let js = "amazing";

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "Laura");
console.log(typeof 29);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
*/

// let age = 30;
// age = 31;

// const birthYear = 1995;


// Math operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageLaura = now - 1995;
// console.log(ageJonas, ageLaura);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// //  assignement operators

// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x + 1
// x--; // x - 1
// console.log(x);

// // Comparison operators

// console.log(ageJonas > ageLaura); // >, <, >=, <=
// console.log(ageLaura >= 18);

// const isFullAge = ageLaura >= 18;

// console.log(now - 1991 > now - 2018);

// operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageLaura = now - 1995;
// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 -10 -5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageLaura) / 2;
// console.log(ageJonas, ageLaura, averageAge);

// Strings and template literals

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old "
// + job + "!";

// console.log(jonas);

// const jonasNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(jonasNew);

// if / else statements
// const age = 12;
// if (age >= 18) {
//   console.log("Sarah can start driving lessons!");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century; // global(?) definieren, damit man es wieder ausgeben kann

// if (birthYear <= 2000) {
//   century = 20; // block scope
// } else {
//   century = 21; // block scope
// }
// console.log(century);

// type conversion 

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);

// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old.");
// console.log("23" - "10" - 3);
// console.log("23" * "2"); 

// 5 falsy values: 0, "", undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
  
// } else {
//   console.log("You should get a job!");
  
// }

// let height = 1.64;
// if (height) {
//   console.log("YAY! Height is defined");
  
// } else {
//   console.log("Height is UNDEFINED");
  
// }

// Equality Operators

// const age = 18;

// if (age === 18) {
//   console.log("Is of legal age :D (strict)");
// }

// if (age == 18) {
//   console.log("Is of legal age :D (loose)");
// }

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 75) {
//   console.log("Cool! 75 is an amazing number! ");
// } else if (favourite === 23) {
//   console.log("23 is also a cool number");
  
// } else {
//   console.log("Number is not 75 or 23");
// }

// if (favourite !== 23) {
//   console.log("Why not 23?");
// }

// LOGICAL OPERATORS

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
  
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired );

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive.");
  
// } else {
//   console.log("Someone else should drive");
// }

// SWITCH STATEMENT

// const day = "monday";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;

//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
  
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
  
//   case "friday":
//     console.log("Record videos");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
  
//   default:
//     console.log("Not a valid day!");
    
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {console.log("Not a valid day")}



//STATEMENTS AND EXPRESSIONS

// 3 + 4 = expression
// 1991 = expression
// true && flase && !flase = expression

// if (23 > 10) {
//   const str = "23 is bigger";
// } 
// Is a statement



// CONDITIONAL (TERNARY) OPERATOR

// const age = 17;
// // age >= 18 ? console.log("I like to drink wine") : 
// // console.log("I like to drink water");

// const drink = age >= 18 ? "wine 🍷" : "water 🫗";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 🫗";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🫗"}`);
