// set function

function calculator(number1, number2, operator) {

    var result = '';

    switch (operator) {
        case '+':
            result = number1 + number2;
            console.log(parseInt(number1) + ' + ' + parseInt(number2) + ' = ' + parseInt(result) );
            break;
 
        case '-':
            console.log(parseInt(number1) - parseInt(number2) );
            break;

        case '*':
            console.log(parseInt(number1) * parseInt(number2) );
            break;  
         
        case '/':
            console.log(parseInt(number1) / parseInt(number2) );
            break;  

        case '%':
            console.log(parseInt(number1) % parseInt(number2) );
            break;  
            
        default:
            //error message
            break;
    }

}

// set variables

var value = calculator('2', '4', '+');



//not sure why result is suddenly concatenating 
