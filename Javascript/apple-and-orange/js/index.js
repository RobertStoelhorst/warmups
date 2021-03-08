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
  let l = b + Math.max(...oranges); // this sets a loop length to use. we set length as the maximum distance any orange falls in the positive range.
  // it seemed to be more efficient than creating two loops for apples and oranges..? but this does loop 20 times as a result of the arguments versus
  // two different loops of apples.length = 3 and oranges.length = 2
  console.log(l);
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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
