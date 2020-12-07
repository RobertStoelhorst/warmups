console.log('is this working');

// const raindrops = function(number) {
//     let output = '';
//
//     if (number % 3 === 0) {
//         output = output + 'Pling'; // output += 'Pling'
//     }
//     if (number % 5 === 0) {
//         output += 'Plang';
//     }
//     if (number % 7 === 0) {
//         output += 'Plong';
//     }
//     if (output.length === 0) {
//         output += number; // += will concatenate it as string because output was initialised as a string
//     }
//
//     return output;
// }
//
// console.log(raindrops(1755));
// console.log(raindrops(12));
// console.log(raindrops(28));
// console.log(raindrops(105));
//
//
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const raindrops = function (num) {
//   if (num % 3 === 0) {
//     console.log("Pling");
//   } if (num % 5 === 0) {
//     console.log("Plang");
//   } if (num % 7 === 0) {
//     console.log("Plong");
//   } else {
//     console.log(num.toString()); // still returns regardless
//   }
// }
//
// raindrops(12);
//
//
// =-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//
// const raindrops = function (num) {
//   if (num % 3 === 0) {
//     return "Pling";
//   } if (num % 5 === 0) {
//     return "Plang";
//   } if (num % 7 === 0) {
//     return "Plong";
//   } else {
//     return num.toString();
//   }
// }
//
// console.log(raindrops(1755));
//
//
// =-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--==-=-=-
//
//
//  I suspect there is a ternary way to do this function also
//
//
const raindrops = function (num) {
  return (num % 3 === 0 ? "Pling" : num % 5 === 0 ? "Plang" : num % 7 === 0 ? "Plong" : num += "" );
};

console.log(raindrops(1));


// And there you have it, First time I've ever done that on my own, it also totally makes sense to me.. !!!!! Fuck Yeah !!!!
