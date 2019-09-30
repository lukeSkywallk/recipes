import React, {useState} from 'react';
import RecipeDetails from './recipeDetails.js';

function ListRecipe({listRecipes}){

    return(   
        listRecipes.map((recipe, key) => (
            <RecipeDetails key={key} recipe={recipe}></RecipeDetails>
        ))
    )
}

export default ListRecipe;