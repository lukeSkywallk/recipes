import listRecipesJSON from '../data/recipes.json';

const recipeApi = {};

recipeApi.getRecipes = (start, end) => {
    return listRecipesJSON.splice(start, end);
};

recipeApi.getRecipeById = (recipeId) => {
    return listRecipesJSON.find(recipe => recipe._id.$oid === recipeId);
};

export default recipeApi;