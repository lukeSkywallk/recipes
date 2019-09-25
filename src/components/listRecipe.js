import React from 'react';
import RecipeDetails from './recipeDetails.js';

export default class ListRecipe extends React.Component{
    render(){
        return(
            <React.Fragment>
                {
                    this.props.listRecipes.map((recipe, index) =>
                        <RecipeDetails key={index} recipe={recipe}></RecipeDetails>                        
                    )
                }
            </React.Fragment>
        )
    }
}