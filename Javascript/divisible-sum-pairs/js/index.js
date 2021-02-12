console.log("Divisible Sum Pairs");

// n = array length

// k = the integer to divide the pairs by only
// divide pairs if the first int of the pair is less
// than the second int of the pair

// arr = the array of integers to be passed in

sumPairs = (n, k, ar) => {
  // console.log(n, k, ar);
  // set up a counter
  let pairs = 0;
  // we will set two for loops the first one deducting 1 from its loop
  // length and the second one adding one to the start position of ar[i]
  // for the second loop as to avoid an infinate loo[]
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // run our comparison statement and add 1 to the counter
      // for each time the statement is true on the loop
      if ((ar[i] + ar[j]) % k === 0) {
        pairs++;
      }
    }
  }
  //   return or log the pairs result
  console.log(pairs);
  return pairs;
};

// sumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
console.log(sumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
