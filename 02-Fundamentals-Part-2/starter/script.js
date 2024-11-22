'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true 
// if (hasDriversLicense) {
//   console.log("I can drive");
// }

////////////////////////////////////////////////

// FUNCTIONS

// function logger() {
//   console.log("My name is Jonas");
// }

// //calling / running / invoking Function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function saladBar(cucumber, tomato) {
//   const salad = `Salad with ${cucumber} cucumbers and ${tomato} tomatoes.`;
//   return salad;
// }

// const cucumberSalad = saladBar(5, 3);
// console.log(cucumberSalad);

// const tomatoSalad = saladBar(2, 7);
// console.log(tomatoSalad);


// // FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const myAge = calcAge1(1995);
// console.log(myAge);

// // FUNCTION EXPRESSION
// const age2 = function (birthYear) {
//   return 2024 - birthYear;
// }

// const lisasAge = age2(1998);
// console.log(myAge, lisasAge);


/////////////////////////////////////////////////

// ARROW FUNCTIONS

// const calcAge3 = birthYear => 2024 - birthYear;

// const age3 = calcAge3(1956);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `My name is ${firstName} and it will take ${retirement} more years until I retire.`;
// }

// console.log(yearsUntilRetirement(1995, "Laura"));

// console.log(yearsUntilRetirement(1961, "Gabriele"));

///////////////////////////////////////////////////

// FUNCTIONS CALLING OTHER FUNCTIONS  

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges)
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//////////////////////////////////////////////////

// const calcAge = function name(birthYear) {
//   return 2024 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
  
//   if (retirement > 0) {
//     console.log(`${firstName} in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is already retired.`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1995, "Laura"));
// console.log(yearsUntilRetirement(1956, "Dietmar"));
 
/////////////////////////////////////////

// CODING CHALLENGE


// const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreDolphins2 = calcAverage(85, 54, 41);

// const scoreKoalas = calcAverage(65, 54, 49);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if(avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {console.log("No team wins....");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins2, scoreKoalas2);

///////////////////////////////////////////////////////////////

// ARRAYS

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1956, 1961, 1995, 1998);
// console.log(years);

// console.log(friends[2]);

// console.log(friends.length); // .length is a property
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const jonas = ["Jonas", "Schmedtmann", 2024 - 1991, "teacher", friends];
// console.log(jonas);

// EXERCISE 

const calcAge = function (birthYear) {
  return 2024 - birthYear;
}

const years = [1960, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);



