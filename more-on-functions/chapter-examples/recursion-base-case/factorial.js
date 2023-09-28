//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer) {
  if (!isValid(integer)) {
    if (integer === 1) {
      return integer;
    } else {
      return integer * (factorial(integer - 1));
    }
  } else {
    return "ERROR: NEEDS TO BE A POSITIVE INTEGER ONLY"
    
  }
  
}

console.log(factorial(-1));
// console.log(typeof(typeof(3)))

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.

function isValid(integer) {
  return ((integer % 1 !== 0) || (typeof(integer) !== 'number') || (integer < 0))
}