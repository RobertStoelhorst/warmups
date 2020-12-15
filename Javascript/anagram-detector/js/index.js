const words = ["enlists", "google", "inlets", "banana"];

const anagramTester = function (str) {
    // console.log(str); // log the argument passed in to test it's working
    // console.log(words.length); // test read the array data
    const matches = [];

    const sortedAnagram = str.split('').sort().join('').trim();
    // console.log(sortedAnagram);

    for(let i = 0; i < words.length; i++) {
        const sortedWord = words[i].split('').sort().join('').trim();
        // console.log("this is sortedWord", sortedWord)
        console.log(sortedAnagram)

        if (sortedAnagram === sortedWord) {
            matches.push(words[i]);
        }
    }
    console.log(matches);
}

anagramTester("listen")


// =--==-=--==-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Camillas solution

// const anagram = function (potentialAnagram, words) {
// 	const matches = [];
// 	const sortedAnagram = potentialAnagram.split('').sort().join('').trim();
    
// 	for (let i = 0; i < words.length; i++) {
// 		const sortedWord = words[i].split('').sort().join('').trim();
//         console.log("this is sortedWord", sortedWord)
//         console.log(sortedAnagram)
		
//         if (sortedAnagram === sortedWord) {
// 			matches.push(words[i])
// 		}
// 	}

// 	return matches;
// }

// console.log(anagram("listen", ["enlists", "inlets", "banana"]))

// console.log(anagram("debit card", ["money", "bad credit", "consumerism"]))

// console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]))