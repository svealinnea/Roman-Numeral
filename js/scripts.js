//Describe: romanNumeral();
//Test: "Should convert 1 to I"
//Expect: romanNumeral(1).toEqual(I)

//Test: "Should convert main numbers to Roman symbols"
//Expect: romanNumeral(50).toEqual(L)

//Test: "Input from user should only be between 0 and 3999"
//Expect: romanNumeral(4000).toEqual(False)

//Test: "Should separate 1s, 10s, 100s and 1000s"
//Expect: inputString(152).toEqual([100,50,2])

//Business Logic//
/*function romanNumeral(number) {
  if (number === 1) {
    return "I";
  } else if (number === 5) {
    return "V";
  } else if (number === 10) {
    return "X";
  } else if (number === 50) {
    return "L";
  } else if (number === 100) {
    return "C";
  } else if (number === 500) {
    return "D";
  } else if (number === 1000) {
    return "M";
  }
}*/


function romanNumeral(number) {
  if (number>=0 && number <4000){
    const inputString = number.split("");//"987"
    for from 1s to 1000s ["9","8","7"]
    let array = [[1,"I"], [5,"V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]]; 
    for (i=0; i<array.length; i++){
      if (number === array[i][0]) {
        return array[i][1];
      }
    }
  } else {
    return false
    } 
}

//UI Logic
$(document).ready(function(){
 $("#form").submit(function(event) {
  event.preventDefault();
  const number = parseInt($("input#number").val());

  if (number && number >= 0) {
    romanNumeral(number);
  } else{
    $("#warning").show();
  }
 });
});