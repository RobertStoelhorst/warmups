console.log("Drawing Books");

drawingBooks = (n, p) => {
  const frontFlip = Math.floor(p / 2);
  // console.log(frontFlip);

  const backFlip = Math.floor(n / 2 - frontFlip);
  // console.log(backFlip);

  const result = Math.min(frontFlip, backFlip);
  return result;
};

console.log(drawingBooks(6, 2));

// n = 6, n is the number of pages in book
// p = 2, p is the page to turn to
