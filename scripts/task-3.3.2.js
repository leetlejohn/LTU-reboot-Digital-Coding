function drinkOrder(drink, size) {
switch (drink) {
    case 'cola':
        console.log('You have ordered a ' + size + ' ' + drink);
        break;
    
    case 'lemonade':
        console.log('You have ordered a ' + size + ' ' + drink);
        break;

    case 'orangeade':
        console.log('You have ordered a ' + size + ' ' + drink);
        break;

    default:
        console.log('The drink you have tried to order does not exist');
        break;
}




}

console.log(drinkOrder('lemonade', 'large'));