// set function

function calculator(number1, number2, operator) {

    switch (operator) {
        case '+':
            console.log(parseInt(number1) + parseInt(number2) );
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

var value = calculator('2', '4', '%');




