// create function and console.log values

function search ( searchString, filter) { 


console.log( searchString, filter);

}

search ('looky, findy')


// add event listener

var inputValue = document.getElementById('queryBox').value;

//need to get the buttons

var button = document.getElementsByTagName('button');

button.addEventListener("onclick", search ( inputValue, button) );  //how to get the actual values?


