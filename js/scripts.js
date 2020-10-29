//Describe: romanNumeral();
//Test: "Should convert 1 to I"
//Expect: romanNumeral(1).toEqual(I)

//Test: "Should convert main numbers to Roman symbols"
//Expect: romanNumeral(50).toEqual(L)

//Business Logic//
function romanNumeral(number) {
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
}