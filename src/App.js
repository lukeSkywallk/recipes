import React from 'react';
import recipeApi from './api/recipeApi.js';
import ListRecipe from './components/listRecipe.js';
import Paginator from './components/paginator.js';

export default class App extends React.Component{

  state = {
    start: 0,
    end: 5,
    recipe: undefined,
    returnListRecipes: undefined
  }

  async componentDidMount(){
    /*const end = 1;
    this.setState({end}, async () =>{
      //console.log(recipeApi.getRecipes(this.state.start,this.state.end));
      //const recipe = await recipeApi.getRecipeById('5744eff20ca7832b5c745a48');
      const listRecipes = await recipeApi.getRecipes(this.state.start, this.state.end)
      this.setState({listRecipes});
    });*/

    const returnListRecipes = await recipeApi.getRecipes(this.state.start, this.state.end)
    this.setState({returnListRecipes});
    
  }

  render(){    
    return (
      /*this.state.recipe !== undefined ? 
        <RecipeDetails recipe={this.state.recipe}></RecipeDetails> : <div>Aguarde</div>*/        

        this.state.returnListRecipes !== undefined ?
        (
        <React.Fragment>
          <ListRecipe listRecipes={this.state.returnListRecipes.list}></ListRecipe>
          <Paginator returnListRecipes={this.state.returnListRecipes}></Paginator>
          
        </React.Fragment>) : <div>Aguarde</div>         
    )
  }
}