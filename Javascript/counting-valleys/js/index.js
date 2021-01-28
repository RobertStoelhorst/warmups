console.log("Counting Valleys");
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=--==-=-=-=-=-=-
//
// My solution

// first I want to change the variable names passed
// into the function so they make more sence num being
// the amount of steps and str being the string of
// steps, I wont use the num though as if the string of
// steps changes we can just use the str.length after
// its split(""). it makes more sence to me as that is
// the data most likely to change.
const countingValleys = function (num, str) {
  // first split the string into array of strings
  let steps = str.split("");
  // set some variables to use as our counters
  let valleyCount = 0;
  let seaLevel = 0;

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] == "D") {
      // decrement seaLevel
      seaLevel--;
    } else {
      if (seaLevel == -1) {
        // increment valleyCount
        valleyCount++;
      }
      //   increment seaLevel
      seaLevel++;
    }
  }
  return valleyCount;
  //   console.log(valleyCount);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=--==-=-=-=-=-=-
// another solution with forEach callback function

// const countingValleys = function (num, str) {
//   let steps = str.split("");
//   let valleyCount = 0,
//     currentSeaLevel = 0,
//     valleyStatus = false;

//   steps.forEach((step) => {
//     step === "U" ? currentSeaLevel++ : currentSeaLevel--;
//     // console.log(currentSeaLevel);
//     if (currentSeaLevel < 0 && !valleyStatus) {
//       valleyCount++;
//       valleyStatus = true;
//     } else if (currentSeaLevel >= 0 && valleyStatus) {
//       valleyStatus = false;
//     }
//   });
//   console.log("this is the valley count", valleyCount);
// };

// countingValleys(8, "UDDDUDUU");
console.log(countingValleys(8, "UDDDUDUU"));
