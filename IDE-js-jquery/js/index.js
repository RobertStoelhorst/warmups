console.log("Testing Testing");


$(document).ready(() => {


    var totalButton = 21;
    var buttonsDiv = document.getElementById('buttons');
    
    for (var i = 1; i <totalButton; i++) {
       var button = document.createElement("input");
       button.type = "button";
    //    button.class = "buttons";
       button.value= "Button "+i;
       button.id = i;
       button.onclick = function(event){
        alert(event.target.id);
        }
       buttonsDiv.append(button);
    }
    

// function possibleChanges(num, usernames) {
//     // Write your code here
//     const newName = []
//     usernames = usernames[0].split("").sort().join("")
//     newName.push(usernames);
//     // return user;
//     console.log(newName)

// }

// // console.log(possibleChanges(1, ["hydra"]));
// possibleChanges(1, ["hydra"]);

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const findSum = function (numbers, queries) {
//     let l = queries[0][0], r = queries[1][0], x =queries[2][0];
//     let sum = 0;
//     // console.log(l);
//     // console.log(r);
//     // console.log(x);
//     // console.log(numbers);
//     for (let i = l; i <= r; i++) {
//     if (numbers[i] == 0) {
//     numbers[i] + x;
//     } else {
//         sum += numbers[i];
//     }
//     }
//     // console.log(sum);

// return sum;
// };

// console.log(findSum([3, 5, 10, 10, 1, 3], [[1], [2], [5]]));
// console.log(findSum([3, 2, -5, 0, 1, 3], [[2], [2], [10]]));
// findSum([3, 5, 10, 10, 1, 3], [[1], [2], [5]]);

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Grading students

// function gradingStudents(grades) {
//     let roundedGrades = [];
//     for (let i = 0; i < grades.length; i++) {
//         let difference = multipleOfFive(grades[i]);
//         let finalGrade = difference + grades[i];

//         if ((difference < 3) && (finalGrade >= 40)) {
//             roundedGrades.push(finalGrade);
//         } else {
//             roundedGrades.push(grades[i]);
//         }
//     }
//     return roundedGrades[0];
// }
// function multipleOfFive(x) {
//     let counter = 0;
//     while (x % 5 != 0) {
//         x++;
//         counter++;
//     }
//     console.log(counter);
//     return counter;
// }

// console.log(gradingStudents([84]));

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// remove duplicates from array
// console.log("Remove duplicates from array");
// duplicate = (arr) => {
//   arr.sort();
//   console.log(arr);
//   obj = {};

//   for (let i of arr) {
//     obj[i] = true;
//   }
//   let b = Object.keys(obj).map(Number);
//   return b;
// };

// console.log(duplicate([1, 2, 4, 1, 5, 3, 2]));
// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// remove even from array

// const oddArray = function (arr) {
//     console.log("this is original array", arr);
//     let odds = [];
//     let evens = [];
//     for( let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2) {
//             odds.push(arr[i]);
//             // console.log(arr);
//         } else {
//             evens.push(arr[i]);
//         }
//     }
//     console.log(odds);
//     console.log(evens);
//     // return odds;
//     // return evens;
// };

// // console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log("odd socks")

// function oddSocks(n, arr) {
//     let pairs = 0;
//     let odds = 0;
//         arr.sort();
//         for(let i = 0; i < n; i++) {
//             if (arr[i] == arr[i+1]) {
//                 i++;
//                     pairs++;
//                } else {
//                    odds++;
//                }
//         }
//     console.log(pairs, "pairs", "and", odds, "odds");
//     }

// console.log(oddSocks(7, [1,2, 1, 2, 1, 3, 2]));

// using spread operator ...

// function sum(x, y, z) {
//     return x + y + z;
//   }

//   const numbers = [1, 2, 3];

//   console.log(sum(...numbers));
// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// console.log("Migratory Birds");

// migratoryBirds = (arr) => {
//   let largest = 1;
//   let counter = largest;
//   // console.log("[largest] = ", largest);
//   // console.log("[counter] = ", counter);
//   let type = 0;
//   let l = arr.length;

//   arr.sort();
//   console.log(arr);

//   for (let i = 0; i < l; i++) {
//     largest = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
//     if (largest > counter) {
//       counter = largest;
//       type = arr[i];
//     }
//   }
//   return type;
// };

// console.log("Case #1 =", migratoryBirds([1, 2, 1, 2, 2, 4]));
// console.log("Case #2 =", migratoryBirds([1, 3, 2, 1, 2, 4]));
// Fails test case #4 on Hackerank... exceeds time-limit for excecution
// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// console.log("Migratory Birds");

// migratoryBirds = (arr) => {
//   let max = 0,
//     maxId = 9;
//   let store = new Array(6).fill(0);

//   for (const num of arr) {
//     store[num]++;
//     if (store[num] > max) {
//       max = store[num];
//       maxId = num;
//     } else if (store[num] === max && num < maxId) {
//       maxId = num;
//     }
//   }
//   return maxId;
// };

// console.log("Case #1 =", migratoryBirds([1, 2, 1, 2, 2, 4, 1, 2, 1]));

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// dayOfProgrammer = (year) => {
//   if (year < 1700 || year > 2700) {
//     return "Year is out of our calendar range";
//   } else if (year == 1918) {
//     return "26.09.1918";
//   } else if (
//     (year <= 1917 && year % 4 == 0) ||
//     year % 400 == 0 ||
//     (year % 4 == 0 && year % 100 != 0)
//   ) {
//     return "12.09." + year;
//   } else {
//     return "13.09." + year;
//   }
// };

// console.log(dayOfProgrammer(1984));
// // console.log(dayOfProgrammer(2707));

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");


// fizzBuzz = (n) => {

//     for (let i = 1; i < n; i++) {
//         if ([i] % 15 == 0) {
//             console.log("FizzBuzz");
//             // return "FizzBuzz";
//         } else if ([i] % 3 == 0) {
//             console.log("Fizz");
//             // return "Fizz";
//         } else if ([i] % 5 == 0) {
//             console.log("Buzz");
//             // return "Buzz"
//         } else {
//             console.log(i);
//             // return [i];
//         }
//     }
// }

// fizzBuzz(15);

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");



// fizzBuzz = (n) => {

//   for (let i = 1; i <= n; i++) {
//     let f = i % 3 == 0, b = i % 5 == 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//   }
// }

// fizzBuzz(15);

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");


// const tools = ["ballendmill", "facemill", "keywaycutter", "slotdrill"];
// const startIndex = 1;
// const target = "slotdrill";


// function toolchanger(tools, startIndex, target) {
//     // I want to loop throung the array and update the count variable to the smallest
//     // amount of iterations it takes to get to the target str either forwards or backwards.
//     // I understand the question well enough and need to work on a solution
//     // console.log(target);
//     // console.log(startIndex);
//     // console.log(tools[startIndex]);
//     // I think I may have gone the wrong way about this and maybe should have looked at forEach with a callback


// let countUp = 0, countDown = 0;

//         for (let i = 0; i < tools.length; i++ ) {
//             if (tools[startIndex] == target) {
//                 return 0; // exit the function and return 0 if the correct tool is already selected 
//             } else if (tools[startIndex]++ == target) {
//                 countUp++;
//             } else if (tools[startIndex]-- == target) {
//                 countDown++;
//             } else {
//             return Math.max(countUp, countDown);
//         }
//     }
// }

// // toolchanger(tools, startIndex, target)
// console.log(toolchanger(tools, startIndex, target));

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// myFunc = () => {
//   alert("This alert was caused as a result of calling another function")
// }

// myFunc2 = () => {
//     myFunc = () => {
//         alert("This alert was caused as a result of calling another function")
//       }
//       return myFunc
// }

// setTimeout(myFunc, 2000);

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");


// a = (x) => {    
//     b = (y) => { // inner function
//       alert(x + y); // use variables from outer scope
//     }
//     return b;       // you can even return a function.
//   }
  
//   setTimeout(a("PICK ME "), 2000, (":86 400"));

// console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// const arr1 = ["steven", "Alexander", "danny", "tommy", "robert", "timmy"]
// const arr2 = ["steve", "Alex", "dan", "tom",  "tim", "rob"]

// getPrefixStrings = (arr1, arr2) => {

//     let count = 0;
//     let values = [];
//     // arr1.slice();
//     // console.log(arr1)

//     for(let i = 0; i < arr1.length; i++) {
//         values.push(arr2[i].slice(arr1[i]))
//     }
//     // console.log("arr1", arr1)
//     // console.log("arr2", arr2)
//     console.log("[values] =", values)

// }

// getPrefixStrings(arr1, arr2)

// getPrefixStrings = (arr1, arr2) => {

// let count = 0;
// let values = [];
// // arr1.slice();
// // console.log(arr1)

// for(let i = 0; i < arr1.length; i++) {
//     if (arr1[i].substring(arr2[i]) === arr1[i]) {
//         values.push(arr2[i].slice(arr1[i]));
//         console.log(count++)
//     }
// }
// // console.log("arr1", arr1)
// // console.log("arr2", arr2)
// console.log("[values] =", values)

// }

// getPrefixStrings(arr1, arr2)

console.log("=--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// const arr3 = [101, 233, 421, 511, 622, 734];
// const arr4 = [10, 23, 42, 51, 62, 73];

// getPrefixStrings = (arr3, arr4) => {

//     // let count = 0;
//     let values = [];
//     // arr1.slice();
//     // console.log(arr1)

//     for(let i = 0; i < arr3.length; i++) {
//         arr4[i].toString()
//         // console.log(arr4)
//         // values.push(arr4[i].split(" ").splice(arr3[i]))
//     }
//     // console.log(arr3)
//     // console.log(arr4)
//     // console.log("[values] =", values)

// }

// getPrefixStrings(arr3, arr4)

// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text = "We went down to the stall, then down to the river."; 
//  var count = countOccurences(text, "down"); // 2

//  console.log(countOccurences("down"))

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// SQL Questions

// SELECT MAX(id) FROM people;
// SELECT AVG(age) FROM people;

// SELECT UPPER(first_name) FROM people ORDER BY (first_name) DESC;
// SELECT UPPER(first_name) FROM people ORDER BY (first_name) ASC;
// SELECT * FROM people ORDER BY (first_name) ASC; // selects and displays entire table with names sorted alphabetically 
// SELECT AVG(age) FROM people WHERE last_name='stoelhorst'; // gets average age for people with the last name of stoelhorst

// SELECT (ID) FROM (COMPANY) WHERE EMPLOYEES > 10000;
// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// findPerimeter = (a, b) => {
//     const total = (a + b) * 2;
//     return total;
// }

// findPerimeter = (a, b) => {
//     return (a + b) * 2;
// }


// console.log(findPerimeter(6, 7));

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

sumNum = (...nums) => {
    sum = 0;
    nums.forEach(value => {
        sum += value
    }) 
console.log(sum);
}

sumNum(1, 2, 3)

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
});

