
// console.log("Compare Singles Function");

// ==-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//  Test function on count with 1 point for each test 
//  not an array of points. we will build a new function 
//  to iterate arrays and log a score into a new array.

// const compareSingles = function (a, b) {
//    let aliceScore = 0;
//    let bobScore = 0;
//    let count = [];
//     console.log(count);
//  if (a > b ) {
//         aliceScore ++
//         console.log("this is aliceScore", aliceScore);
//         console.log(`Blice scores ${aliceScore} point`);
//      } else {
//             bobScore ++
//             //   Or bobScore += 1;
//             console.log("this is bobScore", bobScore);
//             console.log(`Bob scores ${bobScore} point`);
//         }
//         count.push(aliceScore);
//         count.push(bobScore);
//         console.log(count); 
// };

// compareSingles(1, 3);

// ==-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const compareTriplets = function (a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    let count = [];
     console.log(a, b)
    
    for ( let i = 0; i < a.length && b.length; i++) {
        // console.log(b[i])
        if (a.length != b.length) {
            alert("Uneven test scores");
            return;
            // This above conditional was not required in the test but I felt it was relevant
        } else if (a[i] > 100 || b[i] > 100) {
            alert("High test score has resulted in a fail");
            return;
             // This above conditional was required in the test but I felt it was relevant to add an alert and exit function 
        } else if (a[i] > b[i]) {
            //  add to alice score by 1 point if condition passes
            aliceScore ++
        } else if (a[i] < b[i]) {
            //  add to bob score by 1 point if condition passes
            bobScore ++
        }       
    };            
    count.push(aliceScore);
    count.push(bobScore);
    // console.log(count); 
    return count;
    // return "Total Score Comparison " + count; // this could be used to display the result with more context

};

console.log("Compare Triplets Function")
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // this will pass and return [1, 1]

console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // this will pass and return [2, 1]

// console.log(compareTriplets([1, 2, 3], [3, 2, 1, 5])); // this will fail as it contains an uneven amount of scores

// console.log(compareTriplets([17, 28, 30], [101, 16, 8])); // this will fail as it contains a score higher than 100

