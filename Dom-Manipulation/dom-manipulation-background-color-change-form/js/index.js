$(document).ready(function () {

    // WORKING

    // const button = document.getElementById('colorButton');

    // const changeColor = function (e) {
    //     e.preventDefault();
    //     const value = document.getElementById('colorInputText').value;
        
    //       if (value == false ) {
    //           console.log("no input");
    //           $('#colorInputText').css('background-color', 'pink')
    //           alert ("please fill in this field")
    //       } else {
    //         console.log(value);
    //           $('body').css('background-color', value)
    //           $('#colorInputText').css('background-color', 'white')
    //       }
    // };

    // button.addEventListener('click', changeColor);
    // =-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  NOT WORKING
//     $('#form-id').submit(function(e){
//         e.preventDefault();  
//         // or
//         const value = document.getElementById('colorInputText').value;
//         console.log(value);

//         if (value == false) {
//             console.log("empty");
//               $('colorButton').css('background-color', value)
//               $('#colorInputText').css('border-radius', '0.3em')
//         } else {
//             console.log(value);
//               $('body').css('background-color', value)
//               $('#colorButton').css('background-color', '#0076f7')
//               $('#colorInputText').css('background-color', 'white')
//           }
//     });
// // 
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 
// WORKING but prevent default fails the required message
// 
document.getElementById('colorButton').addEventListener("click", function(e){
    e.preventDefault();
   
        const value = document.getElementById('colorInputText').value;

        if (value == false) {
            // console.log("empty");            
              $('#colorInputText').css({ borderColor: '#c92432', backgroundColor: 'pink' })
              $('#colorInputText').attr("placeholder", "Required");
        } else {
            // console.log(value);
            $('#colorInputText').css({ borderColor: 'white', backgroundColor: 'white' })
              $('body').css('background-color', value)
          }
  });

//   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//  NOT WORKING

// document.querySelector('#form-id').addEventListener('submit', submitHandler);

//     function submitHandler(e) {
//     e.preventDefault();
//     //your code here

//     const value = document.getElementById('colorInputText').value;
//     console.log(value);

//         if (value == false ) {
//             console.log("empty");
//             //   $('#colorButton').css('background-color', 'red')
//             //   $('#colorInputText').css('background-color', 'red')
//             //   $('#colorInputText').css('border-radius', '0.3em')
//         } else {
//             console.log(value);
//               $('body').css('background-color', value)
//             //   $('#colorButton').css('background-color', '#0076f7')
//             //   $('#colorInputText').css('background-color', 'white')
//           }
//     };

//   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


});


