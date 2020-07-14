function calculate(numberOne, operation, numberTwo) {

  if (numberOne === undefined) {
    numberOne = 0;
  }

  if (numberTwo === undefined) {
    numberTwo = 0;
  }

    switch (operation) {
    case '+':
      return parseInt(numberOne) + numberTwo
    case '-':
      return numberOne - parseInt(numberTwo)
    case '*':
      return numberOne * numberTwo
    case '/':
      return numberOne / numberTwo
            
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
