console.log("square Root Array");

const sqrt = function (arr) {
    result = []
    for (let i = 1; i < arr.length; i++) {
        //  push the values to array var result and stipulate that they are to be returned as a number as the
        // .toFixed() methos will convert them to a strings
        result.push(Number(Math.sqrt(i).toFixed(4)));
        // console.log(result);
    }
    return result;
};

console.log(sqrt([1, 2, 3, 4, 5]));