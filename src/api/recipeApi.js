import listRecipesJSON from '../data/recipes.json';

const recipeApi = {};

recipeApi.getRecipes = (start, numberElements) => {        
    const list = listRecipesJSON.slice(start * numberElements, (start * numberElements) + numberElements)    
    return {
        'list': list,
        'total': listRecipesJSON.length
    };
};

recipeApi.getRecipeById = (recipeId) => {
    return listRecipesJSON.find(recipe => recipe._id.$oid === recipeId);
};

export default recipeApi;