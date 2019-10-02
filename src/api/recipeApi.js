import listRecipesJSON from '../data/recipes.json';

const recipeApi = {};

recipeApi.getRecipes = (start, numberElements, searchTerm) => {
    var list = undefined;
    var totalElements = 0;
    if(searchTerm === undefined){
        list = listRecipesJSON.slice(start * numberElements, (start * numberElements) + numberElements);
        totalElements = listRecipesJSON.length;
    }else{
        list = recipeApi.getRecipeByName(searchTerm);
        totalElements = list.length;
        list = list.slice(start * numberElements, (start * numberElements) + numberElements);        
        
    }    
    return {
        'list': list,
        'total': totalElements
    };
};

recipeApi.getRecipeById = (recipeId) => {
    return listRecipesJSON.find(recipe => recipe._id.$oid === recipeId);
};

recipeApi.getRecipeByName = (searchTerm) =>{
    const results = listRecipesJSON.filter(function(recipe){ return recipe.nome.toLowerCase().match(searchTerm.toLowerCase())});
    return results;
}

export default recipeApi;