function calculate(numberOne, operation, numberTwo) {
  if (isNaN(numberOne)) {
    numberOne = 0
  }
  if (isNaN(numberTwo)) {
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

/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
