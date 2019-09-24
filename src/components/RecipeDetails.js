import React from 'react';

export default class RecipeDetails extends React.Component{
    render(){
        return(
            <div>
                
                {this.props.recipe.nome}
                   
            </div>
        )
    }
}