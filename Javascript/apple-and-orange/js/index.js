console.log("Apples and Oranges");

// point a = apple tree
// point b = orange tree
// s - t is = to sams house

// d is the value of fruit and is equal to to the amount of
// units either positive or negative distance from the tree
// that it fell from negative being left or positive to the right

// m = amount of apples and n = amount of oranges

countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let appleCount = 0,
    orangeCount = 0;
  let l = b + Math.max(...oranges); // this sets a loop length to use. we set length as the maximum distance any orange falls in the positive range. it seemed to be more efficient than creating two loops for apples and oranges..?
  //   console.log(l);
  for (let i = 0; i < l; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
      //   console.log(appleCount); expected 1
    }
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeCount++;
      //   console.log(orangeCount); expected 1
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
