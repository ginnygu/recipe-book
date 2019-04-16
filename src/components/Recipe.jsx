import React from  'react';

function Recipe(props){
    return(
        <div>
            <p>{props.recipe.ingredients[1]}</p>
        </div>
    )
}

export default Recipe;
