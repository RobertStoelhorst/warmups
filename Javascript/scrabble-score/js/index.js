console.log("is this working ?");

// =-=-=-==-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-
// 


const scrabbleScore = function (str) {

		let totalPoints = 0;

	const points = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
		l: 1,
		n: 1,
		r: 1,
		s: 1,
		t: 1,
		d: 2,
		g: 2,
		b: 3,
		c: 3,
		m: 3,
		p: 3,
		f: 4,
		h: 4,
		v: 4,
		w: 4,
		y: 4,
		k: 5,
		j: 8,
		x: 8,
		q: 10,
		z: 10,
	}
    // pass in a string and split the letters up
    const word = str.split("");
        console.log(word);
        console.log("word array length is", word.length);
    // iterate loop word array 

    for(let i = 0; i < word.length; i++) {
		// console.log(word[i]);
		if (word.includes(word[i])) {
			totalPoints += points[word[i]];
			const score = []
				score.splice(totalPoints);
				
				// console.log(score)
				// console.log(totalPoints)
				// console.log(word)
				// console.log(str)
				
			console.log(`${str} equals ${ totalPoints } points`);

		}
    }
   
};

scrabbleScore("hello");
scrabbleScore("hello w");