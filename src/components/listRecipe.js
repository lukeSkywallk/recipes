import React from 'react';
import RecipeDetails from './recipeDetails.js';
import List from '@material-ui/core/List';


function ListRecipe({listRecipes}){
    return(
        <List>
            {
                listRecipes.map((recipe, key) => (
                    <RecipeDetails key={key} recipe={recipe}></RecipeDetails>
                ))
            }
        </List>
        
    )
}

export default ListRecipe;