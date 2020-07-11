function calculate(numberOne, operation, numberTwo) {

  if (typeof numberOne === 'undefined') {
    numberOne = 0
  }
  if (typeof numberTwo === 'undefined') {
    numberTwo = 0
  }

  switch (operation) {
    case '+':
      return parseInt(numberOne) + parseInt(numberTwo)
    case '-':
      return parseInt(numberOne) - parseInt(numberTwo)
    case '*':
      return parseInt(numberOne) * parseInt(numberTwo)
    default:
      return 'Operation not yet supported. You sent ' + operation
  }
}

// Console.log testing 
console.log(calculate(1, '*', 3))
console.log(calculate(1, '+', 3))
console.log(calculate(1, '-', 3))
console.log(calculate(1, '*', 0))
console.log(calculate(20, '+', undefined))
console.log(calculate(20, '/', 10))
console.log(calculate(undefined, '+', 20))

/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
