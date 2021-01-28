console.log("Jumping On The Clouds");

// =-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-
//  My solution !

const cloudJump = function (n, arr) {
  let jumpsMax = 0,
    jumpsMin = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i]);
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      jumpsMax += 2;
    } else if (arr[i] === 0) {
      jumpsMin++;
    }
  }
  //   return `total maximum jumps = ${jumpsMax + jumpsMin}`;
  console.log(`total maximum jumps = ${jumpsMax + jumpsMin}`);
  //   return `total minimum jumps = ${jumpsMin}`;
  console.log(`total minimum jumps = ${jumpsMin}`);
};

cloudJump(7, [0, 1, 0, 0, 0, 1, 0]);
cloudJump(7, [0, 0, 1, 0, 0, 1, 0]);

// console.log(cloudJump(7, [0, 1, 0, 0, 0, 1, 0]));
// console.log(cloudJump(7, [0, 0, 1, 0, 0, 1, 0]));

// OHHH that one was good, it hurt my brain when I
// was reading the setup for this test but it wasn't
// that hard in the end

// =-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-
// credit to Artem Bozhko for this solution I found on stack

// function jumpingOnClouds(c) {
//   var n = 0;
//   for (var i = 0; i < c.length - 1; ) {
//     i += c[i + 2] ? 1 : 2;
//     n++;
//   }
//   return n;
// }

// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
