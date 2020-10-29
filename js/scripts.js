//Describe: romanNumeral();
//Test: "Should convert 1 to I"
//Expect: romanNumeral(1).toEqual(I)

//Test: "Should convert main numbers to Roman symbols"
//Expect: romanNumeral(50).toEqual(L)

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
  let array = [[1,"I"], [5,"V"], [10, "X"], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]]; 
  for (i=0; i<array.length; i++){
    if (number === array[i][0]) {
    return array[i][1];
    }
  }
}

//UI Logic
$(document).ready(function(){
 $("#form").submit(function(event) {
  event.preventDefault();
  const number = parseInt($("input#number").val());

  if (number && number >= 0) {
    romanNumeral(number);
  } else if{
    $("#warning").show();
  }
 });
});