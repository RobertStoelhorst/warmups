console.log("Electronics Shop");

getMoneySpent = (keyboards, drives, b) => {
  //   console.log(keyboards, drives, b);
  let combo = -1;
  for (let i = 0; i < keyboards.length; i++) {
    const keyboard = keyboards[i];
    for (let j = 0; j < drives.length; j++) {
      const drive = drives[j];
      if (keyboard + drive <= b && keyboard + drive > combo) {
        combo = keyboard + drive;
      }
    }
  }
  console.log(combo);
};

getMoneySpent([40, 50, 60], [5, 8, 12], 60);
