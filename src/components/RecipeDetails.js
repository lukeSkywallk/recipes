import React from 'react';
import ListSession from './listSession.js';
export default class RecipeDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.recipe.nome}</h1>
                <ListSession listSession={this.props.recipe.secao}></ListSession>
                {/*console.log(this.props.recipe.secao)*/}                
            </React.Fragment>
        )
    }
}