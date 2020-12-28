// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // Text Soup:
// // Using HTML, CSS, JavaScript + jQuery, create a web page which 
// // prints a random word from a large sample of text, in a random 
// // position on the page, every 100 milliseconds.

// // Hints:

// // Grab some plain text (~400 words should do) from one the 
// // top 100 novels in the public domain at Project Gutenberg; 
// // paste the text into a hidden <div> element in your HTML file, 
// // and use jQuery to get the contents of the div.

// // Bonus:

// // Fade the text in to make it appear, and then fade it out 
// // to disappear
// // Try random colours, random font sizes, rotation, whatever 
// // floats your boat

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// $(document).ready(function(){

//     console.log("is this working")

//     // const target = document.getElementById( "text-sample" );
//     const target = $( "#text-sample" ).text().trim().split(" ");
//     // console.log(target);
//     // console.log(target.length);

    
//     const getRandomValue = function (maxValue) {
//         const random = Math.floor(Math.random() * maxValue);
//         return random;
//     }

//     // console.log(getRandomValue());

//     const displayWord = function () {
//         const randomIndex = getRandomValue(target.length);

//         const word = target[randomIndex];

//         const content = $("<p>").text(word);
//         $("body").append(content);
//         // console.log(content);
    

//     content.css({
//         position: "absolute", 
//         top: getRandomValue(window.innerHeight) + "px",
//         left: getRandomValue(window.innerWidth) + "px",
//         fontSize: (12 + getRandomValue(50)) + "px",
//         transform: "rotate(" + getRandomValue(360) + "deg)",
//         color: "rgb(" + getRandomValue(256) + "," + getRandomValue(256) + "," + getRandomValue(256) + ")"
//     });

//     // setInterval(function () {
//     //     content.remove()
//     // }, 1000)


//     content.fadeIn(1000).fadeOut(2000, function () {
//         content.remove();
//     });

// };

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// // console.log(displayWord())
// // displayWord()
// setInterval(displayWord, 1000)


// });

$(document).ready( function () {

    // console.log("Is this thing on?")

    const target = $('#text-sample').text().trim().split(" ");
    // console.log(story)

    const getRandomValue = function (maxValue) {
        const random = Math.floor(Math.random() * maxValue);
        return random;
    };
    // console.log(getRandomValue(5))

    const displayWord = function () {

        const randomIndex = getRandomValue(target.length);
        // console.log(randomIndex);
        
        const word = target[randomIndex];
        // console.log(word);

        const content = $('<p>').text(word);
        $('body').append( (content).hide().fadeIn(2000) );

        content.css({
            position: "absolute",
            top: getRandomValue(window.innerHeight) + "px",
            left: getRandomValue(window.innerWidth) + "px",
            fontSize: (12 + getRandomValue(50)) + "px",
            transform: "rotate(" + getRandomValue(360) + "deg)",
            color: "rgb(" + getRandomValue(256) + "," + getRandomValue(256) + "," + getRandomValue(256) + ")"
        });

        content.fadeOut(2000, function () {
            content.remove();
        });

    };

    // displayWord()
    setInterval(displayWord, 200);
});