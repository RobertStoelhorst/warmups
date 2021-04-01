console.log("Number Line Jumps");

kangaroo = (x1, v1, x2, v2) => {
  if (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(kangaroo(1, 3, 1, 2));
console.log(kangaroo(1, 2, 1, 2));
// kangaroo(1, 2, 1, 2);
