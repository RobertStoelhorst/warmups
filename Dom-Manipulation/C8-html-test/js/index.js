$(document).ready(function() {

    console.log("is this working")

    document.getElementById('register-button').addEventListener('click', function(e){
            e.preventDefault();
        
        const value = document.getElementById('input-field').value;

        if (value == false) {
            console.log("empty");
            $('#input-field').css({ borderColor: '#c92432', backgroundColor: 'pink' })
            $('#input-field').attr("placeholder", "Required");
        } else {
            console.log(value);
            $('#input-field').css({ borderColor: 'white', backgroundColor: 'white' })
            //   $('body').css('background-color', value)
          }
        
    });

});