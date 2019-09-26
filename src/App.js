import React from 'react';
import recipeApi from './api/recipeApi.js';
//import RecipeDetails from './components/recipeDetails.js';
import ListRecipe from './components/listRecipe.js'

export default class App extends React.Component{

  state = {
    start: 0,
    end: 500,
    recipe: undefined,
    listRecipes: undefined
  }

  async componentDidMount(){
    /*const end = 1;
    this.setState({end}, async () =>{
      //console.log(recipeApi.getRecipes(this.state.start,this.state.end));
      //const recipe = await recipeApi.getRecipeById('5744eff20ca7832b5c745a48');
      const listRecipes = await recipeApi.getRecipes(this.state.start, this.state.end)
      this.setState({listRecipes});
    });*/

    const listRecipes = await recipeApi.getRecipes(this.state.start, this.state.end)
    
    this.setState({listRecipes});
    
  }

  render(){    
    return (
      /*this.state.recipe !== undefined ? 
        <RecipeDetails recipe={this.state.recipe}></RecipeDetails> : <div>Aguarde</div>*/        

        this.state.listRecipes !== undefined ?
        <ListRecipe listRecipes={this.state.listRecipes}></ListRecipe> : <div>Aguarde</div>         
    )
  }
}