$(function() {
  console.log("JavaScript is working on this site! Cool!");


  //-----------------------------------------------------------------------------------
  // convertToRomanNumeral function takes number as a parameter 
  // and returns a Roman numeral
  // 
  // 100 | C 
  // 90  | XC
  // 50  | L
  // 40  | XL
  // 10  | X
  // 9   | IX
  // 5   | V
  // 4   | IV
  // 1   | I

  function convertToRomanNumeral(number) {
    if(isNaN(number))
      return "Not a number!";
      
    console.log("Number = " + number);
    var output = "";
    var input = parseInt(number);
  
    if(input <= 0)
      return "less than 1";
    else if(input > 100)
      return "greater than 100";
  
    while(input > 0){
      if(input >= 100){
        output += "C";
        input -= 100;
      }else if(input >= 90){
        output += "XC";
        input -= 90;
      }else if(input >= 50){
        output += "L";
        input -= 50;
      }else if(input >= 40){
        output += "XL";
        input -= 40;
      }else if(input >= 10){
        output += "X";
        input -= 10;
      }else if(input >= 9){
        output += "IX";
        input -= 9;
      }else if(input >= 5){
        output += "V";
        input -= 5;
      }else if(input >= 4){
        output += "IV";
        input -= 4;
      }else if(input >= 1){
        output += "I";
        input -= 1;
      }
    }

    return output;
  }



  //-----------------------------------------------------------------------------------
  // Convert the number input when the button is clicked

  var $button = $("button");
  var $numberInput = $("#number_input");
  var $romanNumeralOutput = $("#roman_numeral_output");

  $button.on("click", function(e) {
    e.preventDefault();
    numberVal = $numberInput.val();
    romanNumeralVal = convertToRomanNumeral(numberVal);
    console.log("Roman numeral = " + romanNumeralVal);
    $romanNumeralOutput.val(romanNumeralVal);
  });

});
