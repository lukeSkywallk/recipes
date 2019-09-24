import React from 'react';
import recipeApi from './api/RecipeApi.js';

export default class App extends React.Component{

  state = {
    start: 0,
    end: 5,
  }

  componentDidMount(){
    const end = 10;
    this.setState({end});
    console.log(recipeApi.getRecipes(this.state.start,this.state.end));
  }

  render(){
    return(
      <div>teste</div>
    );
  }
}