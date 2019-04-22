import React from  'react';

function Recipe(props){
    return(
        <div>
            {props.recipe.map(element => 
                <div>
                    <h1>{element.title}</h1>
                    {element.ingredients.map((ingredient) =>(<li key= {ingredient.toString()}>{ingredient}</li>))}
                </div>              
            )}
        </div>
    )
}

export default Recipe;
