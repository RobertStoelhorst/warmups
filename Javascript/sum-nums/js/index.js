console.log("Sum Numbers");

/* This is just a few of the different methods we can use in javascript to 
create a function that will some numbers passed in as arguments. */

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

sumNum = (...nums) => {
    sum = 0;
    nums.forEach(value => {
        sum += value
    }) 
console.log(sum);
}

sumNum(1, 2, 3)

// =--=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

sumNum = (...nums) => {
    const reducer = (a, b) => a + b;
    console.log(nums.reduce(reducer));
}

sumNum(1, 2, 3);