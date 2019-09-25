import React from 'react';
import recipeApi from './api/recipeApi.js';
//import RecipeDetails from './components/recipeDetails.js';
import ListRecipe from './components/listRecipe.js'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

export default class App extends React.Component{

  state = {
    start: 0,
    end: 4,
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

        /*this.state.listRecipes !== undefined ?
        <ListRecipe listRecipes={this.state.listRecipes}></ListRecipe> : <div>Aguarde</div>
        */

       <ExpansionPanel>
       <ExpansionPanelSummary

         aria-controls="panel1a-content"
         id="panel1a-header">
         <Typography >Expansion Panel 1</Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
           sit amet blandit leo lobortis eget.
         </Typography>
       </ExpansionPanelDetails>
     </ExpansionPanel>     
          
    )
  }
}