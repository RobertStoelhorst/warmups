console.log("Sales By Match");

const sockMerchant = function (n, arr) {
    let odds = [];
    let evens = [];
    let socks = arr.length
    // let color1 = white, color2 = black, color3 = red; 
    arr.sort();
    console.log(n, arr);
    for (let i = 0; i < socks; i++) {
        if (arr[i] === arr[i + 1]) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i])
        } 
    }
    console.log("even sock pairs", evens.length / 2);
    console.log("odd socks remaining", odds);
    oddSockColor(odds);
};

const oddSockColor = function (odds) {
    for (let i = 0; i < odds.length; i++) {
        if (odds[i] === 1) {
            odds[i] = "white";
        } else if (odds[i] === 2) {
            odds[i] = "black";
        } else if (odds[i] === 3) {
            odds[i] = "red";
        }
    }
    console.log("odd socks colors are", odds[0],odds[1], "and", odds[2]);
}

// console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2]);