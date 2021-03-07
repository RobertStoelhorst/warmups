console.log("Grading students");

gradingStudents = (grades) => {
  // Solution 1
  //   const roundUp = 5,
  //     roundDown = 2;
  //   for (let i = 0; i < grades.length; i++) {
  //     if (grades[i] >= 38 && grades[i] % roundUp > roundDown) {
  //       grades[i] = grades[i] + (roundUp - (grades[i] % roundUp));
  //     }
  //   }
  //   return grades;

  //   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Solution 2
  //   let index = 0;
  //   while (index < grades.length) {
  //     if (grades[index] % 5 >= 3 && grades[index] >= 38) {
  //       grades[index] = grades[index] - (grades[index] % 5) + 5;
  //     }

  //     index++;
  //   }
  //   return grades;

  //   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Solution 3

  return grades.map((grade) => {
    const round = Math.ceil((grade + 1) / 5) * 5;
    return round - grade < 3 && grade >= 38 ? round : grade;
  });
};

console.log(gradingStudents([73, 67, 38, 33]));
