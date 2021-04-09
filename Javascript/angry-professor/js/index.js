console.log("Angry Professor");

// Two test cases which is the first line of input
// k is the cancelation threshold of students
// a is an array of arrival times of the students
// n is equal to the amount of students

// const angryProfessor = (k, a) => {
//   a.sort();
//   const n = a.length;
//   let onTime = 0,
//     late = 0;

//   for (let i = 0; i < n; i++) {
//     if (a[i] <= 0) {
//       onTime++;
//     } else if (a[i] >= 1) {
//       late++;
//     }
//   }
//   //   console.log("Threshold is", k, "students");
//   //   console.log("Late", late);
//   //   console.log("onTime", onTime);

//   if (onTime >= k) {
//     return "NO";
//   } else if (onTime < k) {
//     return "YES";
//   }
// };

//  There was definitely a few unessasary steps in my first attempt at this
// initially I had written the function the same as below but I had a mistake with my return
//  statetments where the YES and NO were in the wrong order !

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const angryProfessor = (k, a) => {
  const n = a.length;
  let onTime = 0;

  for (let i = 0; i < n; i++) {
    if (a[i] <= 0) {
      onTime++;
    }
  }
  if (onTime >= k) {
    return "NO";
  } else {
    return "YES";
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function angryProfessor(k, a) {
//   let onTime = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] <= 0) {
//       onTime += 1;
//     }
//   }

//   return onTime >= k ? "NO" : "YES";
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function angryProfessor(k, a) {
//   let onTime = 0;

//   a.forEach((student) => {
//     if (student <= 0) {
//       onTime++;
//     }
//   });

//   if (onTime >= k) {
//     return "NO";
//   } else {
//     return "YES";
//   }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log(angryProfessor(2, [0, -1, 2, 1]));

//   console.log(thresholdCount);
//   if (onTime <= k) {
//     return "YES";
//   } else {
//     return "NO";
//   }
