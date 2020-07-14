function calculate(numberOne, operation, numberTwo){
    if (numberOne === undefined){
        numberOne = 0
    
    }
    if (numberTwo === undefined){
        numberTwo = 0
    }
    switch (operation){
        case '+':
            return parseInt(numberOne) + parseInt(numberTwo)
            break;
        case '-':
            return parseInt(numberOne) - parseInt(numberTwo)
            break;
        case '*':
            return parseInt(numberOne) * parseInt(numberTwo)
            break;
        case '/':
            return parseInt(numberOne) / parseInt(numberTwo)
            break;
        default:
            return ' we are currently not supporting this ' + operation
    }





}

//console.log(calculate(undefined, '^', '10'))
/**
 Export an object with two properties.
 One property is `calculate`. The value will be the calculate function.
 The other property is `features` which contains a string value with a description.
 */
module.exports = {
  calculate,
  features: 'Add, Subtract, etc.'
}
