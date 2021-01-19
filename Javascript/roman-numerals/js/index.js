console.log("Roman Numerals");

const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// console.log(roman.IV);

const romanNumeral = function (num) {
  // loop less if we have a condition where if the number passed in is 0
  // it will return and exit function
  if (num === 0) {
    return "0 is not a Roman number";
  }
  let str = "";

  //   loop over object
  for (let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i]);
    // console.log(q);
    num -= q * roman[i];
    str += i.repeat(q);
  }
  return str;
};

console.log(romanNumeral(0));
console.log(romanNumeral(8));
console.log(romanNumeral(1001));
