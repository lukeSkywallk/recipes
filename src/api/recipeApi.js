import listRecipesJSON from '../data/recipes.json';

const recipeApi = {};

recipeApi.getRecipes = (start, end) => {    
    const list = listRecipesJSON.splice(start, end)
    return {
        'list': list,
        'total': listRecipesJSON.length
    };
};

recipeApi.getRecipeById = (recipeId) => {
    return listRecipesJSON.find(recipe => recipe._id.$oid === recipeId);
};

export default recipeApi;