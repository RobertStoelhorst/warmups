console.log("type in a year to find out if it is a leap year or not");

const isLeapYear = function (num) {
    // set conditions to test if year divisible by 4 is = to 0 but year divided by 100 is NOT! = to 0
    if (num % 4 === 0 && num % 100 !== 0) {
        return true; // passes test and returns a truth
    // set a secondary condition to follow up the first test but also pass the test if the number divided by 400 is = to 0
    } else if (num % 400 === 0) {
        return true;
    // if the result does not pass the previous two tests than return a non truth
    } else {
        return false;
    }
}

console.log(isLeapYear(1997));
console.log(isLeapYear(1996));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

// =-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// My personal bonus write this as a ternary

// const isLeapYear = function (num) {
//     return (num % 4 === 0  && num % 100 !== 0 ? true : false); // Needs more work not quite sure 
// };

// console.log(isLeapYear());