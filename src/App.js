import React from 'react';
import recipeApi from './api/RecipeApi.js';
import RecipeDetails from './components/RecipeDetails.js';

export default class App extends React.Component{

  state = {
    start: 0,
    end: 5,
    recipe: undefined,
  }

  componentDidMount(){
    const end = 1;
    this.setState({end}, async () =>{
      //console.log(recipeApi.getRecipes(this.state.start,this.state.end));
      const recipe = await recipeApi.getRecipeById('5744eff20ca7832b5c745a48');
      this.setState({recipe});
    });
    
  }


/*componentDidMount(){
  const end = 1;
  this.setState({end}, () =>{
    //console.log(recipeApi.getRecipes(this.state.start,this.state.end));
    const recipe = recipeApi.getRecipeById('5744eff20ca7832b5c745a48');
    this.setState({recipe});
    //console.log(recipe);
  });
  
}*/
  render(){    
    return (
      this.state.recipe !== undefined ? 
        <RecipeDetails recipe={this.state.recipe}></RecipeDetails> : <div>Aguarde</div>
    )
  }
}