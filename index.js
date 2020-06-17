$(function(){
    
    // accessing API_URL present in env.js
    console.log(API_URL);
    
    //$('#dynamic-content').text("Dynamic content");

    
    

    // jQuery methods go here...
    $('#dynamic-content').append('Enter First Number : <input type="text" id="firstNum"> <br><br><br> Enter Second Number : <input type="text" id="secondNum"><br><br>'); 
    $('#dynamic-content').append('Result : <input type="text"  id="result"><br><br>');

    $('#dynamic-content').append('<input type="button" id="btnAdd" value="Display Result">');

    $('#btnAdd').on('click', function(){
        let sum = parseInt ($('#firstNum').val()) + parseInt ($('#secondNum').val());
        $('#result').val(sum);
    });
  
});