function calculate(numberOne, operation, numberTwo) {
  let numOne = 0
  let numTwo = 0

  if (typeof numberOne !== 'undefined') {
    numOne = parseInt(numberOne)
  }
  if (typeof numberTwo !== 'undefined') {
    numTwo = parseInt(numberTwo)
  }
  console.assert(Number.isInteger(numOne), 'Unexpected numberOne ' + numberOne)
  console.assert(Number.isInteger(numTwo), 'Unexpected numberTwo ' + numberTwo)
  switch (operation) {
    case '+':
      return numOne + numTwo
    break;
    case '-':
      return numOne - numTwo
    break;
    case '*':
      return numOne * numTwo
    break;
    case '/':
      return numOne / numTwo
    break;
    default:
      console.assert(['+','-','*','/'].indexOf(operation) >= 0, 'Unexpected operation ' + operation)
  }
}

// my own checks by running "node index.js"
// generates an error on bad number or operation values, but does not stop execution
// console.log(calculate('3', '+', '8'))
// console.log(calculate('3', '#', '8'))
// console.log(calculate('3', '+', 'a'))
/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
