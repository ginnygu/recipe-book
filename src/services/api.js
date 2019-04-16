const SEARCH_URL = process.env.REACT_APP_SEARCH_URL;
const GET_URL = process.env.REACT_APP_GET_URL;

function fetchRecipes(search) {
    return fetch(`${SEARCH_URL}${search}`)
        .then(res => res.json());
}
function fetchRecipe(id){
    return fetch(`${GET_URL}${id}`)
        .then(res => res.json());
}

export { fetchRecipes, fetchRecipe };