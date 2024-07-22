const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// //Q.)Declare an empty array?
// //SOLUTION:-
// const empty = new Array();

// //Q.)Declare an array with more than 5 number of elements?
// //SOLUTION:-
// const arrayWithFiveElements = new Array(5);
// let counter = 0;
// while (counter < 5) {
//     arrayWithFiveElements.push(counter + 1)
//     counter++;
// }

// //Q.)Find the length of your array?
// //SOLUTION:-
// console.log(array.length);

// //Q.)Get the first item, the middle item and the last item of the array?
// //SOLUTION:-
// const [first, middle, last] = [array[0], array[Math.floor(array.length / 2)], array[-1]]

// //Q.)Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5?
// //SOLUTION:-
// import dataType from "./dataTypes.mjs";
// const mixedDataTypes = new Array()
// Object.getOwnPropertyNames(dataType).forEach(key => {
//   mixedDataTypes.push(dataType[key])
// })
// console.log(mixedDataTypes)

// //Q.)Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon?
// //SOLUTION:-
// const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon";
// const itCompanies = companies.replace(/[,]|and/ig, "").match(/[a-zA-Z]+/ig);

// //Q.)Print the array using console.log()?
// //SOLUTION:-
// console.log(itCompanies);

// //Q.)Print the number of companies in the array?
// //SOLUTION:-
// console.log(itComapanies.length)

// //Q.)Print the first company, middle and last company?
// //SOLUTION:-
// const [first, middle, last] = [itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[-1]]
// console.log(first, middle, last)

// //Q.)Print out each company?
// //SOLUTION:-
// function print(item) {
//   console.log(item)
// }
// itCompanies.forEach(print);

// //Q.)Change each company name to uppercase one by one and print them out?
// //SOLUTION:-
// function extractCompanyNames(text) {
//   const regex = /[A-Z][a-z]+/g;
//   return text.match(regex);
// }
// const companiesString =
//   "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.";
// function upperCase(text) {
//   return text.toUpperCase();
// }
// const companies = extractCompanyNames(companiesString).map(upperCase);
// console.log(companies);

// //Q.)Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.?
// //SOLUTION:-
// function compeleteString(total, current, index, array, sentence) {
//   if (array.length - 1 == index) {
//     total += `, and ${current} ${sentence}.`
//   }
//   else {
//     total += `, ${current}`;
//   }
//   return total;
// }
// const suffix = "are big it companies"
// const compString = companies.reduce((total, current, index, array) => {
//   total = compeleteString(total, current, index, array, suffix);
//   return total
// })
// console.log(compString)

// //Q.)Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found?
// //SOLUTION:-
// const findCompany = function (company, companiesArray) {
//   const index = companiesArray.findIndex((val, index) => {
//     if (val == company) {
//       return index
//     }
//   })
//   return index
// }

// console.log(findCompany("tcs", companies))

// //Q.)Filter out companies which have more than one 'o' without the filter method?
// //SOLUTION:-
// const getCompany = function (target, companies) {
//   return companies.filter((val) => {
//     // console.log(val, target)
//     const regex = new RegExp(target, "ig")
//     const condition = val.match(regex)
//     if (Array.isArray(condition) && condition.length > 1) {
//       return true;
//     }
//     return false;
//   })
// }

// console.log(getCompany('o', companies))

// //Q.)Sort the array using sort() method?
// //SOLUTION:-
// companies.sort()
// console.log(companies)

// //Q.)Reverse the array using reverse() method?
// //SOLUTION:-
// companies.reverse();
// console.log(companies)

// //Q.)Slice out the first 3 companies from the array?
// //SOLUTION:-
// console.log(companies.slice(0, 3))

// //Q.)Slice out the last 3 companies from the array?
// //SOLUTION:-
// console.log(companies.slice(-3))

// //Q.)Slice out the middle IT company or companies from the array?
// //SOLUTION:-
// const arrayLength = companies.length;
// const mid = Math.floor(arrayLength / 2)
// if (arrayLength % 2 == 0) {
//   console.log(companies.slice(mid - 1, mid + 1))
// }
// else {
//   console.log(companies.slice(mid, mid + 1))
// }

// //Q.)Remove the first IT company from the array?
// //SOLUTION:-
// const tempComp = [...companies]
// console.log(tempComp.shift())

// //Q.)Remove the middle IT company or companies from the array?
// //SOLUTION:-
// const tempComp = [...companies]
// const arrayLength = companies.length;
// const mid = Math.floor(arrayLength / 2)
// if (arrayLength % 2 == 0) {
//   console.log(tempComp.splice(mid - 1, 2))
// }
// else {
//   console.log(tempComp.splice(mid, 1))
// }
// console.log(tempComp)

// //Q.)Remove the last IT company from the array?
// //SOLUTION:-
// const tempComp = [...companies]
// console.log(tempComp.pop())

// //Q.)Remove all IT companies?
// //SOLUTION:-
// const tempComp = [...companies]
// console.log(tempComp.splice(0))
// console.log(tempComp)
