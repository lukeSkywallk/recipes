import React, {useState, useEffect} from 'react';
import recipeApi from './api/recipeApi.js';
import ListRecipe from './components/listRecipe.js';
import Paginator from './components/paginator.js';
import Search from './components/search.js';

function App(){
  const [startingPaginationShowing, setStartingPaginationShowing] = useState(0);
  const [actualPaginationShowing, setActualPaginationShowing] = useState(0);
  const numberElementsPerPage = 5;
  const [dataListRecipes, setDataListRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(undefined);

  useEffect(() => {
    async function fetchData(){
      const returnDataListRecipes = await recipeApi.getRecipes(startingPaginationShowing, numberElementsPerPage, searchTerm);
      //console.log(returnDataListRecipes.list);
      setDataListRecipes(returnDataListRecipes);      
    }
    fetchData();
  },[startingPaginationShowing, numberElementsPerPage, searchTerm]);
  
  const actionGoPage = async (pageNumberToGo) => {       
    setActualPaginationShowing(pageNumberToGo);
    setStartingPaginationShowing(pageNumberToGo);
  };
    
  const doSearch = (toSearch) =>{
    setSearchTerm(toSearch);
  }

  return (
    dataListRecipes.list !== undefined ?
      <React.Fragment>
        <Search doSearch={doSearch}></Search>
        <ListRecipe listRecipes={dataListRecipes.list}></ListRecipe>
        <Paginator
          numberTotalRecipes={dataListRecipes.total} 
          startingPaginationShowing={startingPaginationShowing} 
          actualPaginationShowing={actualPaginationShowing}
          actionGoPage={actionGoPage}></Paginator>
      </React.Fragment>:<div>Aguarde</div>
  );
}

export default App;