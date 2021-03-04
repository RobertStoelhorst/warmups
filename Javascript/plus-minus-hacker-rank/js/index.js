console.log("plusMinus fraction printer");

const plusMinus = function (num, arr) {
    // declare variables for each int type and 
    // then use them to store the count of each type
    let positives = 0, negatives = 0, zeros = 0;
    // set a for loop for array length and store in 
    // variable i
    for(let i = 0; i < arr.length; i++) {
        // set up our conditions to loop over the 
        // array and find the different int types
        if (arr[i] > 0) { // if greater than 0
            positives ++
        } else if (arr[i] < 0) { // if less than 0
            negatives ++
        } else if(arr[i] === 0) { // if strickly eqaul to 0
            zeros ++
        }
    }
    // no need to set up any more variables explicity 
    // print each the ratios to a fixed decimal 
    // point of 6
 console.log((positives / arr.length).toFixed(6));
 console.log((negatives / arr.length).toFixed(6));
 console.log((zeros / arr.length).toFixed(6));
};



plusMinus(6, [-4, 3, -9, 0, 4, 1]);
