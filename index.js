function calculate(numberOne, operation, numberTwo) {
  let n1, n2
  if (!isNaN(numberOne)){n1 = parseInt(numberOne)} else {n1 = 0}
  if (!isNaN(numberTwo)){n2 = parseInt(numberTwo)} else {n2 = 0}

  switch(operation) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2
    case '*':
      return n1 * n2
    case '/':
      return n1 / n2 
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
