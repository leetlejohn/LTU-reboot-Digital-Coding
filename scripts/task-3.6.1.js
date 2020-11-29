var paragraph = document.querySelectorAll('p');

paragraph.forEach( function(para) {

para.style.color = "green";
} );


var image = document.querySelector('img');

image.setAttribute ('src', 'https://i.pinimg.com/736x/01/49/70/0149705f8e38df8846bb070cbc475f96.jpg');
image.style.width = '300px';