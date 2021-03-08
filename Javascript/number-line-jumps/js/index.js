console.log("Number Line Jumps");

kangaroo = (x1, v1, x2, v2) => {
  if ((x1 - v1) % (x2 - v2) == 0) {
    return "NO";
  } else {
    return "YES";
  }
};

console.log(kangaroo(1, 2, 1, 2));
// kangaroo(1, 2, 1, 2);
