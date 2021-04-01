console.log("Designer PDF Viewer");

designerPdfViewer = (h, word) => {
// console.log(h, word)
const letters = word.split('')
console.log(letters)
let value = []
const alphabet = ['a', 'b', 'c', 'd', 'e',
'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y',
'z'];

for (let i = 0; i < h.length; i++) {
    letters.forEach(el => {
        if (el == letters.indexOf(alphabet[i])) {
        //  let val = indexOf(alphabet) = indexOf(h);
         console.log(true)
        }
    });
}

/* A THOUGHT I HAD WOULD BE TO PUSH ALPHABET ARRAY AND h ARRAY INTO
INTO A NEW MATRIX ARRAY AND COMPARE THEM AS KEY AND VALUES OR 
DO THE SAME IN AN OBJECT FORMAT */



// console.log(letters)
// for (let i = 0; i < word.length; i++) {
//     if(letters[i] == word[i]) {
//         value.push(letters[i] + word[i])
//         console.log(value)
//     }
// }
};

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5], "abc");
// console.log(designerPdfviewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5], "abc"));