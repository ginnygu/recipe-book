import React from 'react';
// import ListOfRecipes from './ListOfRecipes';
function Search(props){
    return(
        <div>
            <form onSubmit={props.HandleSubmit}>
            <input type="text" value={props.searchWord} name="recipes" onChange={props.HandleChange}/>
            <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;