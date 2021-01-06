
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
        } else if (a[i] > 100 || b[i] > 100) {
            alert("High test score has resulted in a fail");
            return;
        } else if (a[i] > b[i]) {
            aliceScore ++
        } else if (a[i] < b[i]) {
            bobScore ++
        }       
    };            
    count.push(aliceScore);
    count.push(bobScore);
    // console.log(count); 
    // return count;
    return "Total Score Comparison " + count;

};

console.log("Compare Triplets Function")
// console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
console.log(compareTriplets([5, 6, 7, 12, 3], [3, 6, 10, 3, 7]));
// console.log(compareTriplets([17, 28, 30], [101, 16, 8]));

