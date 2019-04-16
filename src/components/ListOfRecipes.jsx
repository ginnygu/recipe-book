import React from 'react';

function ListOfRecipes(props){
    return (
        <div>
            {props.recipes.map((recipe) => (
                <ul key ={recipe.recipe_id}>  
                    <p onClick = {()=> props.HandleRecipe(recipe.recipe_id)}>{recipe.title}</p>
                </ul>
            ))}
        </div>
    )
}

export default ListOfRecipes;