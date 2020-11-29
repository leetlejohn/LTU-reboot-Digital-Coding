var pageDiv = document.querySelector( 'div' );        

var paragraph = document.createElement('p');
var text = document.createTextNode('This paragraph is JavaScript');

paragraph.appendChild( text );

pageDiv.appendChild( paragraph ); 
