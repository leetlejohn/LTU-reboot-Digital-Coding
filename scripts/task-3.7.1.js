// create function and console.log values

function search ( searchString, filter) { 

console.log( searchString, filter);

}

// search ('looky, findy')


// add event listener

var button = document.getElementById("cat");

button.addEventListener("onclick", function (event) {

    search( cat, filter);
})
