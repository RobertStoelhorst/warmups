console.log("Utopian Tree");

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// While loop
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const utopianTree = (n) => {
//   let cycle = 1;
//   let height = 1;

//   while (cycle <= n) {
//     if (cycle % 2 !== 0) {
//       height *= 2; // this is the shorthand for height = height * 2;
//     } else {
//       height++;
//     }
//     cycle++;
//   }
//   return height;

//   //   console.log(height);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// for loop
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const utopianTree = (n) => {
  //   console.log(n);

  let height = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
};

// WHEN HACKERRANK SAYS The first line contains an integer, t, the number of test cases.
// IT LITERALLY MEANS THERE ARE THAT MANY SEPERATE TESTS TO RUN.
// THEN WHEN IT SAYS t subsequent lines each contain an integer, n, the number of cycles for that test case.
// THEN THE VALUES OF n ARE THE VALUES THAT ARE PASSED TO EACH CONSECUTIVE TEST.....
// as follows

// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

// For example, if the number of growth cycles is , the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(2));
console.log(utopianTree(3));
console.log(utopianTree(4));
console.log(utopianTree(5));

// OR FOR THE ACTUAL INPUT OF THE HACKERRANK TEST IT LOOKS AS FOLLOWS

// Sample Input

// 3
// 0
// 1
// 4
// Sample Output

// 1
// 2
// 7
console.log("");

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
