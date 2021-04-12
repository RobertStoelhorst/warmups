console.log("Viral Advertising");

function viralAdvertising(n) {
  let shared = 5,
    liked = 0,
    cumulative = 0;

  for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared / 2);
    // console.log(liked);
    shared = liked * 3;
    // console.log(shared);
    cumulative += liked;
    // console.log(cumulative);
  }
  return cumulative;
}

console.log(viralAdvertising(5));
