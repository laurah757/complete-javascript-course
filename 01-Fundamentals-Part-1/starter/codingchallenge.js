// Mark and John are trying to compare their BMI (Body Mass Index), 
// which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// const weightMark1 = 78;
// const heightMark1 = 1.69;

// const weightJohn1 = 92;
// const heightJohn1 = 1.95;

// const bmiCalculationMark1 = weightMark1 / heightMark1 ** 2;
// const bmiCalculationJohn1 = weightJohn1 / heightJohn1 ** 2;

// console.log(bmiCalculationMark1);
// console.log(bmiCalculationJohn1);

// const markHigherBMI1 = bmiCalculationMark1 > bmiCalculationJohn1;
// console.log(markHigherBMI1);

// //  Data 2

// const weightMark2 = 95;
// const heightMark2 = 1.88;

// const weightJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiCalculationMark2 = weightMark2 / heightMark2 ** 2;
// const bmiCalculationJohn2 = weightJohn2 / heightJohn2 ** 2;

// console.log(bmiCalculationMark2);
// console.log(bmiCalculationJohn2);

// const markHigherBMI2 = bmiCalculationMark2 > bmiCalculationJohn2;
// console.log(markHigherBMI2);

// if (bmiCalculationMark1 > bmiCalculationJohn1) {
//   console.log("Mark's BMI is higher than John's!")
// } else {
//   console.log("John's BMI is higher than Mark's!")
// }

// // 2 

// if (bmiCalculationMark2 > bmiCalculationJohn2) {
//   console.log(`Mark's BMI (${bmiCalculationMark2}) is higher than John's (${bmiCalculationJohn2})!`)
// } else {
//   console.log(`John's BMI (${bmiCalculationJohn2}) is higher than Mark's! (${bmiCalculationMark2})`)
// }

// CODING CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else if(scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// }

// Bonus 1

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// const minScoreDolphins = scoreDolphins >= 100;
// const minScoreKoalas = scoreKoalas >= 100;

// if (scoreDolphins > scoreKoalas && minScoreDolphins) {
//     console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphins && minScoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if(scoreDolphins === scoreKoalas && minScoreDolphins && minScoreKoalas) {
//     console.log("Both win the trophy");
// } else if(!minScoreDolphins && !minScoreKoalas) {
//     console.log("Nobody wins. Everybody is a looser!");
// }

// Data 2

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// const minScoreDolphins = scoreDolphins >= 100;
// const minScoreKoalas = scoreKoalas >= 100;

// if (scoreDolphins > scoreKoalas && minScoreDolphins) {
//     console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphins && minScoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if(scoreDolphins === scoreKoalas && minScoreDolphins && minScoreKoalas) {
//     console.log("Both win the trophy");
// } else if(!minScoreDolphins && !minScoreKoalas) {
//     console.log("Nobody wins. Everybody is a looser!");
// }

// DATA 3

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// const minScoreDolphins = scoreDolphins >= 100; // nicht nowendig
// const minScoreKoalas = scoreKoalas >= 100; // einfach nur hinter das &&

// if (scoreDolphins > scoreKoalas && minScoreDolphins) {
//     console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphins && minScoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if(scoreDolphins === scoreKoalas && minScoreDolphins && minScoreKoalas) {
//     console.log("Both win the trophy");
// } else  /*if(!minScoreDolphins && !minScoreKoalas) nicht notwendig*/ {
//     console.log("Nobody wins. Everybody is a looser!");
// }


// CHALLENGE #4

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2  
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


