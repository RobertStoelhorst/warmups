console.log("Array Left Rotation");

// set the funtion to run array.shift() x amount of times
// if we use push() first so as it's not destructive
arrayLeftRotate = (arr, d) => {
  while (d) {
    arr.push(arr.shift());
    // the next step is very important as we will create an
    // infinate loop with out deducting 1 from d each time it loops
    // I found out the hard way lol
    d--;
  }
  return arr;
};

console.log(arrayLeftRotate([1, 2, 3, 4, 5], 4));
// My thought process was right the problem I keep having
// is not understanding Hackeranks stupid explanations with the
// sample input. I wish they would write the input as it
// actually is input. ohh well it's taking time but I almost
// understand now and this was an awsome challenge as I hadn't used the
// while loop in practice before now.
