console.log("is this working")


const removeDuplicates = function (words) {
    const splitWords = words.split(' '); // split words into an array
    console.log(splitWords);
    const uniqueWords = []; // declare empty array

    for(let i = 0; i < splitWords.length; i++) { 
        if (uniqueWords.includes(splitWords[i]) === false) {
            uniqueWords.push(splitWords[i]) // loop through and push to unique words array only the unique words
        }
    }

        return uniqueWords;
}

console.log(removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

// =--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const banana = function () {
    const result = 'b' + 'a' + 'b' * 'a' + 'a' // write an equation that returns NaN and place the strings either side
    console.log(result.toUpperCase()); // convert the result to uppercase, and log the result
};

banana();