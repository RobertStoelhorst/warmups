// =-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 
// //if/else function

// const sergeSays = function (input) {

//     if (input.endsWith("?")) {
//         return "Sure.";
//     } else if (input === "") {
//         return "Fine. Be that way!";
//     } else if (input === input.toUpperCase()) {
//         return "Whoa, chill out!"
//     } else {
//         return "Whatever"
//     }
// };

// console.log(sergeSays("JG7^g"));
// console.log(sergeSays("hi?"));
// console.log(sergeSays("HELLO"));
// console.log(sergeSays(""));
// 
// 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 
//  function using Ternary
// 
const sergeSays = function (input) {
    return (input.endsWith("?") ? "Sure" : input === "" ? "Fine. Be that way" : input === input.toUpperCase() ? "Whoa, chill out!" : "Whatever!" )
};

console.log(sergeSays("can you help me?"));
console.log(sergeSays(""));
console.log(sergeSays("HELLO"));
console.log(sergeSays("J&G3n"));