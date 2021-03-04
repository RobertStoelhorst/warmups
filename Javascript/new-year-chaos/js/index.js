console.log("New Years Chaos");

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// STUDY THIS!  STUDY THIS!  STUDY THIS!  STUDY THIS!
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Solution from medium
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function minimumBribes(queue) {
  let chaotic = false;
  // I take issue with the question as it says print how many bribes
  // it took to get to its current position so if they can only move
  // twice then they only pay two bribes not three
  var bribes = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - (i + 1) > 2) {
      chaotic = true;
    }
    //  as I mentioned above the question doesn't make sense
    // so we will deduct by 1 not 2 this will not pass the
    // test cases on hackerank though
    for (let j = queue[i] - 1; j < i; j++) {
      if (queue[j] > queue[i]) {
        bribes++;
      }
    }
  }
  if (chaotic === true) {
    console.log("Too chaotic");
  } else {
    console.log(bribes);
  }
}

minimumBribes([4, 2, 1, 3, 5, 6, 7, 8, 9]);
minimumBribes([1, 2, 3, 4, 5, 8, 7, 6, 9]);
