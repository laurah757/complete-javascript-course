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

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// }

// const years = [1960, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
// console.log(ages);

// ARRAY OPERATIONS 

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // Adds at the end of array

// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); // adds at the beginning
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(friends); // removes the last element
// console.log(popped);

// friends.shift(); // removes first element
// console.log(friends);

// console.log(friends.indexOf("Steven")); // tells the position in array

// console.log(friends.includes("Steven")); // tells if element is included (true/false)

///////////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// const calcTip = function(bill) {
//   if (bill >=50 && bill <= 300) {
//     return bill * 0.15;
//   } else { return bill * 0.2 }
  
// } 
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

//////////////////////////////////////////////////////////

// OBJECTS

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"]
// ];

// Object mit key/property (age) value (2037 - 1991) pairs

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]   
// }

// DOT VS BRACKET NOTATION

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]   
// }

// console.log(jonas.lastName); // Dot Notation
// console.log(jonas["lastName"]); // Brackets Notation -> String with property name

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]); // You can put any expression in brackets
// } else {
//   console.log("Wrong input! Choose between firstName, lastName, age, job and friends." );
// }

// jonas.location = "Portugal";
// jonas["twitter"] ="@jonasschmedtman";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael."

// console.log(`${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJECT METHODS 

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license. `
//   }
// };


// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas["calcAge"](1991));

// // Challenge

// // "Jonas is a 46-year old teacher, and he has a drivers license."

// console.log(jonas.getSummary());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
  
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height) 
//     return this.bmi
//   }
// }
// mark.calcBMI();
// console.log(mark.bmi);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height) 
//     return this.bmi
//   }
// }
// john.calcBMI();
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)}).`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}).`);
// } 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOOPS


