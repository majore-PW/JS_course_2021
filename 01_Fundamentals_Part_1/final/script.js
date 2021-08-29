// //FIRST and SECOND LESSON
//
// let first = "checkMe";
// let js = "js";
//
// console.log(first);
//
// //data types: number, string, boolean, undefined, null, symbol, BigInt
// // data types are determined automatically
//
// //Data types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
//
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Peter');
//
// //dynamic typing
// javascriptIsFun = 'Yes';
// console.log(typeof javascriptIsFun);
//
// let year;
// console.log(year);
// console.log(typeof year);
//
// year = 1991;
// console.log(typeof year);
//
// //error in typeof null is object XD
// console.log(typeof null);

// //============================================
// //== Lesson 3 Declaring variables let, const, var
// //mutate or reassign
// let age = 30;
// age = 31;
//
// //const cannot be mutated
// const birthYear = 1991;
// //birthYear = 1990;
// // const job; -> cannot be used
//
// // var is mutable.. Let is blocked scope and var is function scoped
// var job = 'programmer';
// job = 'teacher';
//
// // we can create property in global object without using var, let or const
// //================================================================



// //===============================================================
// // lesson 4 OPERATORS
// //================================================================
//
// const now = 2037;
// const ageChris = now - 1991;
// const ageAnn = now - 1995;
// console.log(ageChris, ageAnn);
//
// console.log(ageChris * 2, ageChris / 10, 2 ** 3);
//
// //concatenate strings
// const firstName = 'Chris';
// const lastName = 'Checker';
// console.log(firstName + ' ' + lastName);
//
// // assignment operators
// let x = 10 + 5;
// console.log(x);
// x += 10;
// x += 4;
// x++;
// x--;
// x--;
// console.log(x);
//
// // Comparison operator
// console.log(ageChris > ageAnn);
// console.log(ageAnn >= 18);
//
// const isFullAge = ageAnn >= 18;
// console.log(isFullAge);
//
// console.log(now - 1991 > now - 2018);
//
// //========================================================


// //===============================================================
// // lesson 5 OPERATORS precedence
// //================================================================
//
// const now = 2037;
// const ageChris = now - 1991;
// const ageAnn = now - 1995;
// console.log(ageChris, ageAnn);
//
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
//
// const averageAge = (ageChris + ageAnn) / 2;
//
// //challenge 1
//
// const markHeight = 1.69;
// const markWeight = 78;
//
// const johnHeight = 1.95;
// const johnWeight = 92;
//
// let johnBMI = johnWeight / (johnHeight ** 2);
// let markBMI = markWeight / (markHeight ** 2);
//
// console.log(johnBMI);
// console.log(markBMI);
//
// let markHigherBMI = markBMI > johnBMI;
// console.log('Mark has higher BMI than john: ' + markHigherBMI);
// //================================================================


// //===============================================================
// // lesson 6 Strings and template literals
// //================================================================
//
// const firstName = 'Chris';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;
//
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);
//
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// // use backticks always for all strings
// console.log(`String
// multiple
// lines`)
//
// //================================================================

// //===============================================================
// // lesson 7 IF/ELSE control structure
// //================================================================
//
// const age = 15;
//
// if(age >= 18) {
//     console.log(`Sarah can start driving license`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait ${yearsLeft} years.`);
// }
// let century;
// const birthYear = 1991;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);
//
// // CODING CHALLENGE #2
//
// const markHeight = 1.69;
// const markWeight = 78;
//
// const johnHeight = 1.95;
// const johnWeight = 92;
//
// let johnBMI = johnWeight / (johnHeight ** 2);
// let markBMI = markWeight / (markHeight ** 2);
//
// if(johnBMI > markBMI) {
//     console.log(`John BMI ${johnBMI} is higher than Mark Bmi ${markBMI}`);
// } else if (johnBMI < markBMI) {
//     console.log(`John BMI ${johnBMI} is lower than Mark Bmi ${markBMI}`);
// }
// //================================================================

// //===============================================================
// // lesson 8 TYPE CONVERSION and COERCION
// // conversion - manually convert and type coercion automatically converts behind scenes
// //================================================================
//
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Jonas'));
// console.log(typeof NaN);
//
// console.log(String(23));
//
// console.log(String(23), 23);
//
// //type coercion
// console.log('I am ' + 23 + ' years old'); //Coercion number to string. Operation between string and number it will
// //convert to string
// // the same like this
// console.log('I am ' + '23' + ' years old');
// console.log('23' - '10' - 3); // - will convert to number and plus to string
// console.log('23' / '2'); // will work
// console.log('23' > '18'); // will work
//
// // tricky catchy
// let n = '1' + 1;
// n = n - 1;
// console.log(n);
// //================================================================


// //===============================================================
// // lesson 9 Falsy, truthy
// //================================================================
// // 5 falsy values: 0, '' -> empty string, undefined, null NaN
//
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//
// const money = 0;
// if(money) {
//     console.log("Don't spend it all ;")
// } else {
//     console.log('You should get a job!')
// }
//
// let height;
// if(height) {
//     console.log('Yay! Height is defined');
// } else {
//     console.log('Height is undefined')
// }
// //================================================================

// //===============================================================
// // lesson 10 Equality operators == vs ===
// //================================================================
// // to compare always use ===
// const age = 18;
// if (age === 18 ) {
//     console.log('You just became an adult');
// }
//
// if (age == '18' ) {
//     console.log('You just became an adult');
// }
//
// const favourite = Number(prompt());
// console.log(favourite);
//
// if (favourite === 18 ) {
//     console.log('Favourite number');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7');
// }
//
// if(favourite !== 23) console.log('Why not 23?');
// //===============================================================

// //===============================================================
// // lesson 11 Boolean logic
// //================================================================
//
// const hasDriversLicense = true;
// const hasGoodVision = true;
//
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense);
//
// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is albe to drive');
// } else {
//     console.log('Someone else should drive...')
// }
//
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);
//
// //CODING CHALLENGE #3
// const firstScoreDolphins = 140;
// const secondScoreDolphins = 108;
// const thirdScoreDolphins = 89;
//
// const averageScoreDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
// console.log(averageScoreDolphins);
//
// const firstScoreKoalas = 153;
// const secondScoreKoalas = 91;
// const thirdScoreKoalas = 110;
//
// const averageScoreKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;
// console.log(averageScoreKoalas);
//
// const minimumScoreDolphins = averageScoreDolphins > 100;
// const minimumScoreKoalas = averageScoreKoalas > 100;
//
// if ((averageScoreDolphins >= averageScoreKoalas) && minimumScoreDolphins) {
//     console.log(`Dolphins win with average score: ${averageScoreDolphins}`);
// } else if ((averageScoreDolphins <= averageScoreKoalas) && minimumScoreKoalas) {
//     console.log(`Koalas win with average score: ${averageScoreKoalas}`);
// } else if (averageScoreKoalas === averageScoreDolphins && minimumScoreDolphins && minimumScoreKoalas) {
//     console.log(`There is DRAW`);
// } else {
//     console.log(`No one win the trophy`)
// }
// //===============================================================

// //===============================================================
// // lesson 11 Switch statement
// //================================================================
//
// const day = 'monday';
//
// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`);
//     case 'friday':
//         console.log('Record videos');
//     case `saturday`:
//     case `sunday`:
//         console.log(`Enjoy weekend`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
// }
// console.log('cds');
//
// // //===============================================================


// //===============================================================
// // lesson 12 Statements and expressions
// //================================================================
//
// // expression produces values
// 3 + 4
// 1991
// true && false && !false
//
// //statement are like full sentences that translate our actions
// if(23>10) {
//     const str = '23 is bigger';
//     console.log('check');
// }
//
// // //===============================================================

// //===============================================================
// // lesson 13 Ternary operator
// //================================================================
//
// const age = 23;
// age >= 18 ? console.log('true') : console.log('false');
//
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
//
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
//
// // coding challenge #4
// const bill = 350;
// const tip = bill <= 50 && bill >= 300 ? bill * 0.20 : bill * 0.15;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
//
// console.log(tip);
//
//
// // //===============================================================
