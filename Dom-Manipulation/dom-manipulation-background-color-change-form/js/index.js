$(document).ready(function () {

    console.log("is this working?");

    const button = document.getElementById('colorButton');

    const changeColor = function (e) {
        e.preventDefault();
        const value = document.getElementById('colorInputText').value;
        
          if (value == false ) {
              console.log("empty");
              $('#colorInputText').css('background-color', '#fbacac')
              $('#colorInputText').css('border-radius', '0.3em')
          } else {
            console.log(value);
              $('body').css('background-color', value)
              $('#colorButton').css('background-color', '#0076f7')
              $('#colorInputText').css('background-color', 'white')
          }
    };

    button.addEventListener('click', changeColor);
    // =-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // const addForm = document.forms['form'];

    // addForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const value = addForm.querySelector('input[type="text"]').value;
    //     console.log(value);
    //           if (value == false ) {
    //           console.log("empty");
    //           $('#colorButton').css('background-color', 'red')
    //       } else {
    //           $('body').css('background-color', value)
    //       }
    // });

//     const button = document.getElementById('lib-button');

// const makeMadLib = function () {
//   const noun = document.getElementById('noun').value;
//   console.log(noun);
//   const adjective = document.getElementById('adjective').value;
//   const person = document.getElementById('person').value;

//   const story = `${ person } really likes ${ adjective } ${ noun }.`;
//   document.getElementById('story').innerText = story;
// };

// button.addEventListener('click', makeMadLib);

});


