// set function

function calculator(number1, number2, operator) {

    var result = '';

    switch (operator) {
        case '+':
            result = parseInt(number1) + parseInt(number2);
            console.log(number1 + ' + ' + number2 + ' = ' + result );
            break;
 
        case '-':
            result = number1 - number2;
            console.log(number1 + ' - ' + number2 + ' = ' + result );
            break;

        case '*':
            result = number1 * number2;
            console.log(number1 + ' * ' + number2 + ' = ' + result );
            break;  
         
        case '/':
            result = number1 / number2;
            console.log(number1 + ' / ' + number2 + ' = ' + result );
            break;  

        case '%':
            result = number1 % number2;
            console.log(number1 + ' % ' + number2 + ' = ' + result );
            break;  
            
        default:
            console.log('This is an error message');
            break;
    }

}

// set variables

var value = calculator('2', '4', '+');




