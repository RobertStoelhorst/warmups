console.log("Beautiful Days At the Movies");
// console.log(012 / 2);
// console.log(Math.round(012));

// let num = 210;

// const beautifulDays = (i, j, k) => {

// };

// console.log(beautifulDays());

// const reversedNum = (num) => {
//   numRev =
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
//   //   return numRev;

//   if (numRev % 2) {
//     return "NOT A BEAUTIFUL DAY";
//   } else {
//     return numRev;
//   }
// };

// function generateRange(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(generateRange(20, 23));

function beautifulDays(i, j, k) {
  let arr = [];
  for (let x = i; x <= j; x++) {
    arr.push(x);
  }

  //   console.log(arr);
  //   return arr;

  const reversedNum = (num) => {
    console.log(num);

    for (let i = 0; i < num.length; i++) {
      let revNumsArray = [];

      //   numRev = [
      revNumsArray.push(
        parseFloat(num[i].toString().split("").reverse().join("")) *
          Math.sign(num[i])
      );
      //   ];
      //   return numRev;
      //   console.log(numRev);
      // revNumsArray.push(num[i]);
      console.log(revNumsArray);

      //   if (numRev % 2) {
      //     return "NOT A BEAUTIFUL DAY";
      //   } else {
      //     return numRev;
      //   }
    }
  };
  reversedNum(arr);
  //   console.log(reversedNum(arr));
  // }
}
// }

// console.log(beautifulDays(20, 23, 6));
beautifulDays(20, 23, 6);

// console.log(reversedNum(23));
// console.log(reversedNum(23));
// console.log(02 / 6);
// console.log(12 / 6);
// console.log(22 / 6);
// console.log(32 / 6);
// console.log((20 - 02) / 6);
// console.log([...Array(5).keys()]);
