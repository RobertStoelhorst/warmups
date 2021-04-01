console.log("Breaking The Records");

breakingRecords = (scores) => {
  let high = 0,
    low = 0;
  let highestScore = scores[0];
  let lowestScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      high++;
    }
    if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      low++;
    }
  }

  console.log([high, low]);
};

// breakingRecords = (scores) => {
//   let games = scores;
//   console.log("games", games);
//   let min = games[0];
//   console.log("min", min);
//   let max = games[0];
//   console.log("max", max);
//   let minRecord = 0;
//   let maxRecord = 0;

//   for (const score of games) {
//     if (max < score) {
//       max = score;
//       maxRecord++;
//     } else if (score < min) {
//       min = score;
//       minRecord++;
//     }
//   }

//   console.log([maxRecord, minRecord]);
// };

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
