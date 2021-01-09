console.log("Min-Max Sum");

const miniMaxSum = function (arr, n) {
    //  test our array passed in 
    console.log(arr); 
    // declare variables to add mini and max sums into
    let mini = 0, max = 0; 
    // now as a test case we will use array sort that way the only combo of numbers that sum to the
    // highest amount will be the last n amount of indexes of the array.
    arr.sort();
    // loop first 4 integers for mini then reverse() arr and loop first 4 for max
    for (let i = 0; i < n; i++) {
        mini += arr[i]
    } 
    arr.reverse(); 
    for (let j = 0; j < n; j++ ) {
        // console.log(arr); 
        max += arr[j]
        // console.log(mini + "", max + "");
    }
    console.log(mini + "", max + "");
};

// miniMaxSum([1, 2, 3, 4, 5], 4);
miniMaxSum([1, 2, 3, 5, 4, 1, 4, 5, 5, 5], 4); 
miniMaxSum([1, 2, 3, 5, 4, 1, 4, 5, 5, 5], 5); 

//  note: console.log/print outside the for loop function for a destructive awnser 
//  rather than printing inside the for loop function see line 19 which is commented out