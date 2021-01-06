console.log("is this working");

// I struggled with coprehention of the task explained here, the details are important but now obvious

const aVeryBigSum = function (arr1, arr2) {
    let sum = 0;
    for(let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    console.log("Total sum is", sum);
};

aVeryBigSum(5,
            [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
            );
