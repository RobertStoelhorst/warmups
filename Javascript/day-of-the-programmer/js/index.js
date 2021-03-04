console.log("Day Of The Programmer");

dayOfProgrammer = (year) => {
  if (year < 1700 || year > 2700) {
    return "Year is out of our calendar range";
  } else if (year == 1918) {
    return "26.09.1918";
  } else if (
    (year <= 1917 && year % 4 == 0) ||
    year % 400 == 0 ||
    (year % 4 == 0 && year % 100 != 0)
  ) {
    return "12.09." + year;
  } else {
    return "13.09." + year;
  }
};

console.log(dayOfProgrammer(1984));
console.log(dayOfProgrammer(2707));
