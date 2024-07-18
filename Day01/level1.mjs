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
// //SOLUTIONS:-
// const empty = new Array();



// //Q.)Declare an array with more than 5 number of elements?
// //SOLUTIONS:-
// const arrayWithFiveElements = new Array(5);
// let counter = 0;
// while (counter < 5) {
//     arrayWithFiveElements.push(counter + 1)
//     counter++;
// }



// //Q.)Find the length of your array?
// //SOLUTIONS:-
// console.log(array.length);



// //Q.)Get the first item, the middle item and the last item of the array?
// //SOLUTIONS:-
// const [first, middle, last] = [array[0], array[Math.floor(array.length / 2)], array[-1]]



// //Q.)Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5?
// //SOLUTIONS:-
// import dataType from "./dataTypes.mjs";
// const mixedDataTypes = new Array()
// Object.getOwnPropertyNames(dataType).forEach(key => {
//   mixedDataTypes.push(dataType[key])
// })
// console.log(mixedDataTypes)



// //Q.)Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon?
// //SOLUTIONS:-
// const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon";
// const itCompanies = companies.replace(/[,]|and/ig, "").match(/[a-zA-Z]+/ig);



// //Q.)Print the array using console.log()?
// //SOLUTIONS:-
// console.log(itCompanies);



// //Q.)Print the number of companies in the array?
// //SOLUTIONS:-
// console.log(itComapanies.length)



// //Q.)Print the first company, middle and last company?
// //SOLUTIONS:-
// const [first, middle, last] = [itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[-1]]
// console.log(first, middle, last)



// //Q.)Print out each company?
// //SOLUTIONS:-
// function print(item) {
//   console.log(item)
// }
// itCompanies.forEach(print);



// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies