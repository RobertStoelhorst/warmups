console.log("Cats and a Mouse");

catAndMouse = (x, y, z) => {
  const catA = Math.abs(x - z);
  //   console.log(catA);
  const catB = Math.abs(y - z);
  //   console.log(catB);
  if (catB > catA) {
    return "Cat A";
  } else if (catB < catA) {
    return "Cat B";
  }
  return "Mouse C";
};

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

//  x = Cat A
//  y = Cat B
//  z = Mouse C

// Math.abs(valX - valY) returns the absolute value of valY - valX
// so deduct valX - (from) valY
