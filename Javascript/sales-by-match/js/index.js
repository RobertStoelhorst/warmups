console.log("Sales By Match");

// const sockMerchant = function (n, arr) {
//   let odds = [];
//   let evens = [];
//   let socks = arr.length;
//   arr.sort();
//   // console.log(n, arr);
//   for (let i = 0; i < socks; i++) {
//     if (arr[i] === arr[i + 1]) {
//       evens.push(arr[i]);
//     } else {
//       odds.push(arr[i]);
//     }
//   }
//   // console.log("even sock pairs", evens.length / 2);
//   // console.log("odd socks remaining", odds);
//   //   oddSockColor(odds, evens);
// };

// const oddSockColor = function (odds, evens) {
//   for (let i = 0; i < odds.length; i++) {
//     if (odds[i] === 1) {
//       odds[i] = "white";
//     } else if (odds[i] === 2) {
//       odds[i] = "black";
//     } else if (odds[i] === 3) {
//       odds[i] = "red";
//     }
//   }
//   console.log("even sock pairs", (evens.length / 2).toString());
//   console.log("odd socks remaining", odds.length.toString());
//   console.log("odd socks colors are", odds[0], odds[1], "and", odds[2]);
// };

sockMerchant = (a, ar) => {
  let evens = [];
  ar.sort();
  console.log(ar);
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      evens.push(ar[i]);
    }
  }
  return evens.length;
};

console.log(sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
