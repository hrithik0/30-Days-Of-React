// //Q.)First remove all the punctuations and change the string to array and count the number of words in the array
// //SOLUTION:-
// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// const words = text.trim().match(/[a-zA-Z]+/gi);
// console.log(words);
// console.log(words.length);

// //Q.)In the following shopping cart add, remove, edit items
// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// //**add 'Meat' in the beginning of your shopping cart if it has not been already added
// //**add Sugar at the end of you shopping cart if it has not been already added
// //**remove 'Honey' if you are allergic to honey
// //**modify Tea to 'Green Tea'
// //SOLUTION:-
// class stringArrayOperation {
//   constructor(stringArray) {
//     this.stringArray = stringArray;
//   }
//   add(word, position) {
//     let temp = this.stringArray.map((item) => {
//       return item.toLowerCase();
//     });
//     let wordFound = false;
//     for (let item of temp) {
//       item === word.toLowerCase() ? (wordFound = true) : (wordFound = false);
//       if (wordFound) {
//         break;
//       } else {
//         continue;
//       }
//     }
//     if (!wordFound) {
//       if (position === "start") {
//         this.stringArray.unshift(word);
//       } else {
//         this.stringArray.push(word);
//       }
//     }
//   }
//   remove(word) {
//     let temp = this.stringArray.map((item) => {
//       return item.toLowerCase();
//     });
//     word = word.toLowerCase();
//     const index = temp.findIndex((val, index) => {
//       if (val === word) {
//         return index;
//       }
//     });
//     if (index >= 0) {
//       temp.splice(index, 1);
//       this.stringArray.splice(index, 1);
//     }
//   }
//   modify(word, change) {
//     let temp = this.stringArray.map((item) => {
//       return item.toLowerCase();
//     });
//     word = word.toLowerCase();
//     const index = temp.findIndex((val, index) => {
//       if (val === word) {
//         return index;
//       }
//     });
//     if (index >= 0) {
//       this.stringArray[index] = change;
//     }
//   }
// }
// const cart = new stringArrayOperation(shoppingCart);
// cart.add("Meat", "start");
// cart.add("Sugar", "end");
// cart.remove("Honey");
// cart.modify("Tea", "Green Tea");
// console.log(shoppingCart);

// //Q.)In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// //SOLUTION:-
// import countries from "./countries.mjs"
// if (countries.includes('Ethiopia')) {
//     console.log("ETHIOPIA");
// }
// else {
//     countries.push('Ethiopia')
// }

// //Q.)In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// //SOLUTION:-
// import web_techs from "./web_techs.mjs"
// if (web_techs.includes('Sass')) {
//     console.log("Sass is a preprocessor");
// }
// else {
//     web_techs.push('Sass')
// }
// console.log(web_techs)

// //Q.)Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// //SOLUTION:-
// const fullStack = frontEnd.concat(backEnd);         //Method 1
// const fullStack1 = [...frontEnd, ...backEnd];       //Method 2
// const fullStack2 = new Array(...frontEnd, ...backEnd)       //Method 3
// console.log(fullStack, fullStack1, fullStack2)
