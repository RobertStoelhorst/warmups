console.log("FizzBuzz");

const fizzBuzz = function (n) {
    // loop through n from 1 < 100 and including 100
    for (let i = 1; i <= n; i ++) {
        //  set conditions to test multiples of both 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            // print FizzBuzz if true
            console.log("FizzBuzz");
            //  set conditions to test multiples of only 3
        } else if (i % 3 == 0) {
            //  print Fizz if true
            console.log("Fizz");
            //  set conditions to test if multiple of only 5
        } else if (i % 5 == 0) {
            //  print Buzz if true
            console.log("Buzz");
            //  set condition that anything else prints just the int of i
        } else {
            console.log(i);
        }
    }
}; 

fizzBuzz(100);