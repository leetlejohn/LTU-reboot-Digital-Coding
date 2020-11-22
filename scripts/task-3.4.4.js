var recipe = {
recipeTitle: 'Spaghetti Carbonara',
servings: 3,
ingredients: ['nutmeg', 'parmesan', 'spaghetti', 'pork goujons'],
directions: ['Cook the food', 'Cook the food more'],
letsCook: function() {

    document.write("I'm hungry let's cook " + recipe.recipeTitle );
}

};

recipe.letsCook()


var ingredients = recipe.ingredients;

document.write('<br> <br><strong>Ingredients</strong> <br> ')

for( var index = 0; index < ingredients.length; index++ ) {
    
    document.write( '<br> <li>' + ingredients[index]);
}

//examples of Object.keys and entries

document.write( '<br> <br>' + Object.keys(recipe) );
document.write( '<br> <br>' + Object.entries(recipe) );
