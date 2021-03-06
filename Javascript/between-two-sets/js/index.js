console.log("Between Two Sets");

// function getTotalX(a, b) {
//   let count = 0;
//   let between = [];
//   let low = a.slice(-1).pop();
//   let high = b.slice(0).shift();

//   for (let i = low; i <= high; i++) {
//     between.push(i);
//   }

//   for (let i = 0; i <= between.length; i++) {
//     if (between[i] % a[i] && between[i] % b[i] == 0) {
//       count++;
//     }
//   }
//   return count;
// }
//   console.log(a);
//   let aCount = 0,
//     bCount = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (a[i] % 2 == 0) {
//       aCount++;
//       if (b[i] % 2 == 0) {
//         bCount++;
//       }
//     }
//     return aCount + bCount;
//   }

// function getTotalX(a, b) {
//   let validCount = 0;

//   for (let x = 1; x <= 100; x++) {
//     if (a.every((int) => x % int == 0)) {
//       if (b.every((int) => int % x == 0)) {
//         validCount++;
//       }
//     }
//   }

//   return validCount;
// }

function getTotalX(a, b) {
  // Write your code here
  const lowLimit = a[a.length - 1];
  const highLimit = b[0];
  let consideredMultiples = [];
  //get multiples of the highest member in the first array till the lowest value in the second array
  for (let i = lowLimit; i <= highLimit; i += lowLimit) {
    consideredMultiples.push(i);
  }
  //filter the array based on whether members of first array can go in it
  consideredMultiples = consideredMultiples.filter((multiple) =>
    a.reduce(
      (shouldFilter, val) =>
        multiple % val !== 0 ? false : shouldFilter ? true : null,
      true
    )
  );
  //filter the array based on whether its members can go in the second array
  consideredMultiples = consideredMultiples.filter((multiple) =>
    b.reduce(
      (shouldFilter, val) =>
        val % multiple !== 0 ? false : shouldFilter ? true : null,
      true
    )
  );
  return consideredMultiples.length;
}

// if (between[i] % b[i] == 0) {
//     count++;
//   }

// function getTotalX(a, b) {
//   let validCount = 0;

//   for (let x = 1; x <= 100; x++) {
//     if (a.every((int) => x % int == 0)) {
//       if (b.every((int) => int % x == 0)) {
//         validCount++;
//       }
//     }
//   }

//   return validCount;
// }

console.log(getTotalX([2, 6], [24, 36]));
// getTotalX([2, 6], [24, 36]);
// console.log(getTotalX([2, 4], [16, 32, 96]));
