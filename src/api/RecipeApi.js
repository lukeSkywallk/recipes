import listRecipesJSON from '../data/recipes.json';

const recipeApi = {};

recipeApi.getRecipes = (start, end) => {
    return listRecipesJSON.splice(start, end);
};

export default recipeApi;