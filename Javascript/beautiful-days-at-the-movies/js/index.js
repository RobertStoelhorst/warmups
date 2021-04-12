// This was a great challenge and purely a solution I came up with I learned soo
// much and only refernced the javascript docmentation on this one which is sort of a
// first for me definitely a challenge as complicated as this one

console.log("Beautiful Days At the Movies");

function beautifulDays(i, j, k) {
  let arr = [];
  for (let x = i; x <= j; x++) {
    arr.push(x);
  }
  return reversedNum(arr, k);
}

const reversedNum = (num, k) => {
  let revNumsArray = [];

  for (let i = 0; i < num.length; i++) {
    revNumsArray.push(
      parseFloat(num[i].toString().split("").reverse().join("")) *
        Math.sign(num[i])
    );
  }
  // console.log(num);
  // console.log("reversed", revNumsArray);
  return deductAndDivide(num, revNumsArray, k);
};

const deductAndDivide = (arr1, arr2, divisor) => {
  let total = [],
    days = [];
  for (let i = 0; i < arr1.length; i++) {
    total.push(arr1[i] - arr2[i]);

    if (total[i] % divisor == 0) {
      days.push(total[i]);
    }
  }
  // console.log(days.length);
  return days.length;
};

console.log(beautifulDays(20, 23, 6));
// beautifulDays(20, 23, 6);

// =-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// A far more elegant solution here WOW !

function beautifulDays(i, j, k) {
  let count = 0;

  for (let x = i; x <= j; x++) {
    let y = x.toString().split("").reverse().join("");
    let sol = Math.abs((x - y) / k);
    if (Number.isInteger(sol)) {
      count += 1;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
