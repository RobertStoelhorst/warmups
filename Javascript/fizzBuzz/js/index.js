console.log("FizzBuzz");

// const fizzBuzz = function (n) {
//     // loop through n from 1 < 100 and including 100
//     for (let i = 1; i <= n; i ++) {
//         //  set conditions to test multiples of both 3 and 5
//         if (i % 3 == 0 && i % 5 == 0) {
//             // print FizzBuzz if true
//             console.log("FizzBuzz");
//             //  set conditions to test multiples of only 3
//         } else if (i % 3 == 0) {
//             //  print Fizz if true
//             console.log("Fizz");
//             //  set conditions to test if multiple of only 5
//         } else if (i % 5 == 0) {
//             //  print Buzz if true
//             console.log("Buzz");
//             //  set condition that anything else prints just the int of i
//         } else {
//             console.log(i);
//         }
//     }
// }; 

// fizzBuzz(100);


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  here we have it as a ternary 

// const fizzBuzz = function (n) {

//     for (var i = 1; i <= 100; i++) {
//         var f = i % 3 == 0, b = i % 5 == 0;
//         console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
//     };
// };
//     fizzBuzz(100);

const sqrt = function (arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(Number(Math.sqrt(i).toFixed(4)));
        // console.log(result);
    }
    return result;
}

console.log(sqrt([1, 2, 3, 4, 5]));
// sqrt([1, 2, 3, 4, 5]);