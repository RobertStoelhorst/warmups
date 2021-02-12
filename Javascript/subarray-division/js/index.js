console.log("Subarray Division");

const subArray = (s, d, m) => {
  //   console.log(s);
  //   console.log(d);
  //   console.log(m);
  let solutions = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }
    if (sum == d) {
      solutions++;
    }
  }
  console.log(solutions);
};

// function getWays(squares, total, window) {
//   total = parseInt(total);
//   window = parseInt(window);
//   var solutions = 0;
//   for (var i = 0; i <= squares.length - window; i++) {
//     var sum = 0;
//     for (var x = 0; x < window; x++) {
//       sum += squares[i + x];
//     }
//     if (sum == total) {
//       solutions++;
//     }
//   }
//   console.log(solutions);
// }

subArray([2, 2, 1, 3, 2], 4, 2);
// console.log(subArray([2, 2, 1, 3, 2], 4, 2));
