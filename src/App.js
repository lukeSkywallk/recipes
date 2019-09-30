import React, {useState, useCallback, useEffect} from 'react';
import recipeApi from './api/recipeApi.js';
import ListRecipe from './components/listRecipe.js';
import Paginator from './components/paginator.js';

function App(){
  const [startingPaginationShowing, setStartingPaginationShowing] = useState(1);
  const [actualPaginationShowing, setActualPaginationShowing] = useState(1);
  const [numberElementsPerPage, setNumberElementsPerPage] = useState(5);
  const [dataListRecipes, setDataListRecipes] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const returnDataListRecipes = await recipeApi.getRecipes(startingPaginationShowing, numberElementsPerPage);
      setDataListRecipes(returnDataListRecipes);      
    }
    fetchData();
  },[startingPaginationShowing, numberElementsPerPage]);

  /*const actionGoPage = useCallback(
    async () => {      
        //const returnDataListRecipes = await recipeApi.getRecipes(start, numberElementsPerPage);
        //setDataListRecipes(returnDataListRecipes);      
        console.log('rodou');
    },[startingPaginationShowing, numberElementsPerPage]);  */
  
    const actionGoPage = async (pageNumberToGo) => {
        setActualPaginationShowing((pageNumberToGo), async () =>{
          const returnDataListRecipes = await recipeApi.getRecipes(startingPaginationShowing, numberElementsPerPage);
          setDataListRecipes(returnDataListRecipes);
          setStartingPaginationShowing(pageNumberToGo);
        });        
    }

  return (
    dataListRecipes.list !== undefined ?
      <React.Fragment>
        <ListRecipe listRecipes={dataListRecipes.list}></ListRecipe>
        <Paginator
          numberTotalRecipes={dataListRecipes.length} 
          startingPaginationShowing={startingPaginationShowing} 
          actualPaginationShowing={actualPaginationShowing}
          actionGoPage={actionGoPage}></Paginator>
      </React.Fragment>:<div>Aguarde</div>
  );
}

export default App;
/*import React from 'react';
import recipeApi from './api/recipeApi.js';
import ListRecipe from './components/listRecipe.js';
import Paginator from './components/paginator.js';

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
    this.actionGoPage = this.actionGoPage.bind(this);
    this.actionBackPage = this.actionBackPage.bind(this);
    this.actionForwardPage = this.actionForwardPage.bind(this);
  }

  async componentDidMount(){
    const returnListRecipes = await recipeApi.getRecipes(this.state.start, this.state.numberElements)
    this.setState({returnListRecipes});    
  }

  actionGoPage(actualPaginatorShowing){
    this.setState(({actualPaginatorShowing}),async () =>{
      const returnListRecipes = await recipeApi.getRecipes(this.state.actualPaginatorShowing, this.state.numberElements)
      this.setState({returnListRecipes});      
      const start = actualPaginatorShowing;//(actualPaginatorShowing / 5) +1;      
      this.setState({start});
    });
  }

  actionBackPage(actualPaginatorShowing){    
    actualPaginatorShowing = actualPaginatorShowing - 1;
    this.setState(({actualPaginatorShowing}),async () =>{
      const returnListRecipes = await recipeApi.getRecipes(this.state.actualPaginatorShowing, this.state.numberElements)
      this.setState({returnListRecipes});
     
      
      const start = actualPaginatorShowing;
        this.setState({start});
      this.setState({actualPaginatorShowing});
    });
  }

  actionForwardPage(actualPaginatorShowing){
    actualPaginatorShowing = actualPaginatorShowing + 1;
    this.setState(({actualPaginatorShowing}),async () =>{
      const returnListRecipes = await recipeApi.getRecipes(this.state.actualPaginatorShowing, this.state.numberElements)
      this.setState({returnListRecipes});
     
      
      const start = actualPaginatorShowing;
        this.setState({start});
      this.setState({actualPaginatorShowing});
    });
  }

  render(){    
    return (
        this.state.returnListRecipes !== undefined ?
        (
        <React.Fragment>
          <ListRecipe listRecipes={this.state.returnListRecipes.list}></ListRecipe>
          <Paginator 
            returnListRecipes={this.state.returnListRecipes} 
            start={this.state.start} 
            actualPaginatorShowing={this.state.actualPaginatorShowing} 
            actionGoPage={this.actionGoPage}
            actionBackPage={this.actionBackPage}
            actionForwardPage={this.actionForwardPage}></Paginator>
          
        </React.Fragment>) : <div>Aguarde</div>         
    )
  }
}*/