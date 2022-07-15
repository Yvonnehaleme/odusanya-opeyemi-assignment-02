//Challenge - 1
 function sumOfNumbers(arrayOfNumbers) {
  var total=0;
  for(var i in arrayofnumbers) {
      total += arrayofnumbers[i];
  } 
  console.log(total);
   // return arrayOfNumbers.length;
}

sumofnumber([123,155,134, 205, 45])
// assignment.sumOfNumbers = sumOfNumbers;

// Challenge 2
  function countevenNumbers(arrayofNumbers){
    let count = 0
    for (i=o; i< arrayofNumbers.length; i++) {
         if (arrayofNumbers[i] % 2 ==0){
             count ++
        }
    }
    console.log(count)
  }
countEvenNumbers([4,5,7,8,14,45,76])

 */
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
}
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

