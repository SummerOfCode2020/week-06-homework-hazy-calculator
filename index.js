function calculate(numberOne, operation, numberTwo) {
  // cleanse our data of undefined
  const numberOneClean = isNaN(numberOne) ? 0 : numberOne
  const numberTwoClean = isNaN(numberTwo) ? 0 : numberTwo

  switch (operation) {
    case '+':
      return parseInt(numberOneClean) + parseInt(numberTwoClean)
    case '-':
      return parseInt(numberOneClean) - parseInt(numberTwoClean)
    case '*':
      return parseInt(numberOneClean) * parseInt(numberTwoClean)
    case '/':
      return parseInt(numberOneClean) / parseInt(numberTwoClean)
    default:
      return 0
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