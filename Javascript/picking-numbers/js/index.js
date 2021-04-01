console.log("Picking Numbers");

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  MY SOLUTION
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// const pickingNumbers = (n, arr) => {

//     let counts = [];

//     for (let i = 0; i < n; i++) {
//         if (counts[arr[i]] || 0) {
//             counts[arr[i]]++;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }     
//     let max = 0;

//         for (let i = 1; i < n; i++) {

//             if (counts[i] + counts[i - 1] > max) {
//                 max = counts[i] + counts[i - 1];
//             }
//         }
//         console.log(max);
// };

// pickingNumbers(6, [4, 6, 5, 3, 3, 1]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  HACKERANK PASS VERSION SAME SHIT !
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function pickingNumbers(a) {
    const n = a.length
    let counts = new Array(100);
    // console.log(counts);
    // I had to create an array of length 100 and fill it to meet the constraints criterion

for (let i = 0; i < n; i++) {
    if (counts[a[i]] || 0) {
        counts[a[i]]++;
    } else {
        counts[a[i]] = 1;
    }
}     
let max = 0;

    for (let i = 1; i < n; i++) {

        if (counts[i] + counts[i - 1] > max) {
            max = counts[i] + counts[i - 1];
        }
    }
    return max;

}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));