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

subArray([2, 2, 1, 3, 2], 4, 2);
// console.log(subArray([2, 2, 1, 3, 2], 4, 2));
