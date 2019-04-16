import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import ListOfRecipes from './components/ListOfRecipes';
import Recipe from './components/Recipe';
import { fetchRecipes, fetchRecipe } from './services/api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchWord: '',
      recipeId: '',
      recipes: [],
      recipe: [],
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleRecipe = this.HandleRecipe.bind(this);
  }
  componentWillMount(){
    this.FetchRecipes()
    this.FetchRecipe()
  }
  
  FetchRecipes() {
    fetchRecipes(this.state.searchWord)
      .then((data) => {
        this.setState({ recipes: data.recipes })
      })
  }
  FetchRecipe(){
    fetchRecipe(this.state.recipeId)
      .then((data) => {(
        this.setState({ recipe: data.recipe })
      )})
  }

  HandleRecipe(recipe){
    this.setState({ recipeId: recipe })
    this.FetchRecipe();
  }

  HandleSubmit(e) {
    e.preventDefault();
    this.FetchRecipes();
  }
  HandleChange(e) {
    this.setState({
      searchWord: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        < Search
          recipes={this.state.recipes}
          HandleSubmit={this.HandleSubmit}
          HandleChange={this.HandleChange}
          searchWord={this.state.searchWord}
        />
        {this.state.recipes === [] ? ('Data will not load here'):
        (< ListOfRecipes
          HandleRecipe={this.HandleRecipe}
          recipeId = {this.state.recipeId}
          recipes= {this.state.recipes}
          key ={this.state.recipes.recipe_id}
        />)}
        {this.state.recipeId === '' ? ('Data will not load') : 
        (< Recipe
          recipe={this.state.recipe}
          recipeId={this.state.recipeID}
        />)
        }
      </div>
    );
  }
}

export default App;
