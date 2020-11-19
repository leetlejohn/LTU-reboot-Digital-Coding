var recipe = {
recipeTitle: 'Spaghetti Carbonara',
servings: 3,
ingredients: ["nutmeg", "parmesan", "spaghetti", "pork goujons"],
directions: ["Cook the food", "Cook the food more"],
//letsCook: function() {

    //console.log("I'm hungry let's cook " + recipe.recipeTitle );
//}

};

document.write("I'm hungry let's cook " + recipe.recipeTitle );

var ingredients = recipe.ingredients;

document.write('<br> <br><strong>Ingredients</strong> <br> ')

for( var index = 0; index < ingredients.length; index++ ) {
    
    document.write( '<br> <li>' + ingredients[index]);
}


// this doesn't work as a function but I'll work out why later