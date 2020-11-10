// set functions //

function sentence(){
console.log('This is a message from the console derived from a function');
}

function callKitten(kittenName){
    console.log('Come here, ' + kittenName + '!'); 
}


function addnumbers(a,b){
    console.log(a + b);
}

function addOne(num){
    var newNumber = num + 1;
    console.log('You now have ' + newNumber); 
}

// Declare variables //

var numberOfKittens = 5;
var numberOfPuppies = 4; 

// call functions //

sentence();

callKitten("Otis");

addnumbers(6,2);
addnumbers(20, 23);

addOne(numberOfKittens);
addOne(numberOfPuppies);


