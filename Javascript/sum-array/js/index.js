$(document).ready(function() {

    console.log("is this ready")

    // const sumArray = function (array) {
    //     console.log(array[0], array[1]);

    //     let sum = 0;

    //     for(let i = 0; i < array[0].length; i++) {
    //         sum + array[i];
    //     }

    //     return sum;
    // };

    // console.log(sumArray([[1, 3, 3],[1, 2, 3]]));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//  SOLUTION

    // const sumArray = function (array1, array2) {
    //     console.log(array1, array2);
    //     let sum = 0;
        
    //     for(let i = 0; i < array1.length; i++) {
    //         console.log([i]);
    //         sum += array1[i];
    //     }

    //     for(let i = 0; i < array2.length; i++) {
    //         sum += array2[i];
    //     }

    //     return sum;
    // }

    // console.log(sumArray([1, 2, 3], [2, 3, 4]))


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// BONUS: multiple array sum

const multiArraySum = function () {
    let sum = 0;

    // loop arguments and assign to let variable 'i'
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        // loop arguments and assign to let variable 'j'
        for(let j = 0; j < arguments[i].length; j++) {

            //  use plus equals operator to add values from both arrays
            sum += arguments[i][j];
        }
    }
    return sum;
}

console.log(multiArraySum([6, 3, 1], [4, 8, 3.3]))

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
});