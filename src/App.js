import React from 'react';
import recipeApi from './api/recipeApi.js';
import ListRecipe from './components/listRecipe.js';
import Paginator from './components/paginator.js';
import Button from '@material-ui/core/Button';

export default class App extends React.Component{  

  state = {
    start: 1,
    actualPaginatorShowing: 1,
    numberElements: 5,
    recipe: undefined,
    returnListRecipes: undefined
  }

  constructor(props){
    super(props)
    this.handler = this.handler.bind(this);
  }

  async componentDidMount(){
    /*const end = 1;
    this.setState({end}, async () =>{
      //console.log(recipeApi.getRecipes(this.state.start,this.state.end));
      //const recipe = await recipeApi.getRecipeById('5744eff20ca7832b5c745a48');
      const listRecipes = await recipeApi.getRecipes(this.state.start, this.state.end)
      this.setState({listRecipes});
    });*/

    const returnListRecipes = await recipeApi.getRecipes(this.state.start, this.state.numberElements)
    this.setState({returnListRecipes});
    
  }

  handler(actualPaginatorShowing){
    this.setState(({actualPaginatorShowing}),async () =>{
      const returnListRecipes = await recipeApi.getRecipes(this.state.actualPaginatorShowing, this.state.numberElements)
      this.setState({returnListRecipes});
      const start = 12;
      this.setState({start});

      /*if(actualPaginatorShowing % 5 == 1){
        const start = 1;
        this.setState({start});
    }else if(actualPaginatorShowing % 5 == 0){
      
      const start = (actualPaginatorShowing / 5) +1;      
      this.setState({start});        
    }*/



    });
  }

  teste(){
    const start = 4;
    this.setState({start});
  }

  render(){    
    return (
      /*this.state.recipe !== undefined ? 
        <RecipeDetails recipe={this.state.recipe}></RecipeDetails> : <div>Aguarde</div>*/        

        this.state.returnListRecipes !== undefined ?
        (
        <React.Fragment>
          <div>{this.state.start}</div>
          <Button onClick={() => this.teste()}>2</Button>
          <ListRecipe listRecipes={this.state.returnListRecipes.list}></ListRecipe>
          <Paginator returnListRecipes={this.state.returnListRecipes} start={this.state.start} action={this.handler}></Paginator>
          
        </React.Fragment>) : <div>Aguarde</div>         
    )
  }
}