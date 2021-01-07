console.log("Diagonal Matrix Array Difference HARD CODED");

//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-

//  Lets first hard code this to understand it's structure better 
//  and then look at how whe can write some code to perform the diagonal matrix 
//  calculations with a for loop


const diagonalDifferenceHard = function(num, arr) {
    
    // console.log(num + " is is the first element in the object") // this will print the first element passed into function tho we will not be using it
    // console.log(arr[0], arr[1], arr[2]) // this will print ot the matrix of arrays;

    let sum = 0; // set a variable to pass our total sum to later

    let primaryDiagonal = arr[0][0] + arr[1][1] + arr[2][2]; // set a variable and store the total sum of the first diagonal array
    // console.log("This is primaryDiagonal total", primaryDiagonal); // print the total to test

    // Repeat above steps of primaryDiagonal but in order to acheive the secondaryDiagonal
    let secondaryDiagonal = arr[0][2] + arr[1][1] + arr[2][0];
    // console.log("This is secondaryDiagonal total", secondaryDiagonal);

    // set a condition to find which diagonal has the higer value so we can calculate the difference
    if (primaryDiagonal >= secondaryDiagonal) {
        sum = primaryDiagonal - secondaryDiagonal
    } else {
        sum = secondaryDiagonal - primaryDiagonal;        
    }
    // console.log("This is the Diagonal Difference", sum);
    return sum;
};

// // diagonalDifference(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

console.log(diagonalDifferenceHard(3, [[11, 2, 4], 
                                       [4, 5, 6], 
                                       [10, 8, -12]] ));

console.log(diagonalDifferenceHard(3, [[1, 2, 3], 
                                       [3, 2, 1], 
                                       [1, 2, 3]] ));

//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-
 
console.log("Diagonal Matrix Array Difference 0(n)");


const diagonalDifference = function(num, arr) {
    
    let sum = 0; // set a variable to pass our total sum to later
    let primaryDiagonal = 0, secondaryDiagonal = 0; // set variables to hold each diagonal/matrix array sums

    for(let i = 0; i < arr.length; i++) {
        primaryDiagonal += arr[i][i]; // set a variable and store the total sum of the first diagonal array
        // console.log(primaryDiagonal); // print the total to test

        secondaryDiagonal += arr[i][arr.length - [i] - 1]; 
        // console.log(secondaryDiagonal); // print the total to test

    // set a condition/test to find which diagonal has the higer value so we can calculate the difference
    } if (primaryDiagonal >= secondaryDiagonal) {
        sum = primaryDiagonal - secondaryDiagonal
    } else {
        sum = secondaryDiagonal - primaryDiagonal;
    }
    // console.log(sum);
    return sum;
};

// diagonalDifference(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

console.log(diagonalDifference(3, [[11, 2, 4], 
                                   [4, 5, 6], 
                                   [10, 8, -12]] ));

console.log(diagonalDifference(3, [[1, 2, 3], 
                                   [3, 2, 1], 
                                   [1, 2, 3]] ));

// diagonalDifference(3, [[11, 2, 4], 
//                        [4, 5, 6], 
//                        [10, 8, -12]] );

// diagonalDifference(3, [[1, 2, 3], 
//                        [3, 2, 1], 
//                        [1, 2, 3]] );
