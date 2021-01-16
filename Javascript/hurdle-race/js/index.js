console.log("The Hurdle Race");

// my plan is to do an sort() on the hurdles and write a
// condition to see if k is > than the tallest hurdle which
// will be the last position in the "(array)"
// if it is we will return 0
// else tallest hurdle number minus k is the result.
// no for loop required just sort and make a few variables
//
const hurdleRace = function (k, height) {
  height.sort();
  //   console.log(height);
  let n = height.length;
  //   console.log("n", n);
  //   console.log("k", k);
  let tallestHurdle = height[n - 1];
  //   console.log("tallest hurdle", tallestHurdle);
  if (k > tallestHurdle) {
    return 0;
  } else {
    return tallestHurdle - k;
  }
};

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
