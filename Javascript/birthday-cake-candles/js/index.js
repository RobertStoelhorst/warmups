console.log("Birtday Cake Candles");

// 

// const birthdayCakeCandles = function (n, arr) {
//     let count = 0;
//     arr.sort();
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if ()
//         count ++
//     }
//     console.log(count);

// };

function birthdayCakeCandles(n, arr) {
    let max = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        while (arr[i] > max) {
            max = arr[i];
        } if (arr[i] === max) {
            count ++ 
        }    
    } 
    console.log(count);
    return count;
}

// Be aware of time complexity. 
// In my testcase 4, n was 10000. If you use a sorting 
// algorithm with n^2, you will get a runtime error.


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// If we use two loops it will pass but i'm not happy with this functions time complecity

// function birthdayCakeCandles(n, candles) {
//     let max = 0;
//     for(let i = 0; i < candles.length; i++) {
//         if(candles[i] > max) {
//             max = candles[i];
//         }
//     }
//     let count = 0;
//     for(let i = 0; i < candles.length; i++) {
//         if(candles[i] === max) {
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
//     }

birthdayCakeCandles(2, [3, 2, 1, 3, 3, 1, 3, 3, 0]);



