console.log("Bill Division");

bonAppetit = (bill, k, b) => {
  const item = bill[k];
  let sum = (a, b) => a + b;
  let share = bill.reduce(sum) - item;

  if (share / 2 == b) {
    return "Bon Appetit";
  } else {
    return b - share / 2;
  }
};

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
