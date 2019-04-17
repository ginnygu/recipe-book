import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import ListOfRecipes from './components/ListOfRecipes';
import Recipe from './components/Recipe';
import Home from './components/Home'
import { fetchRecipes, fetchRecipe } from './services/api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchWord: '',
      recipeId: '',
      recipes: [],
      recipe: [],
      currentView: ''
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleRecipe = this.HandleRecipe.bind(this);
  }

  FetchRecipes() {
    fetchRecipes(this.state.searchWord)
      .then((data) => {
        this.setState({ recipes: data.recipes })
      })
  }
  FetchRecipe(id) {
    fetchRecipe(id)
      .then((data) => {
        (
          this.setState({ recipe: data.recipe })
        )
      })
  }

  HandleRecipe(recipe) {
    this.setState({ recipeId: recipe })
    this.FetchRecipe(recipe);
    this.setState({
      currentView: 'Recipe'
    })
  }

  HandleSubmit(e) {
    e.preventDefault();
    this.FetchRecipes();
    this.setState({
      currentView: 'Recipes'
    })
  }
  HandleChange(e) {
    this.setState({
      searchWord: e.target.value
    })
  }

  WhatToRender() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'Recipes':
        return (
          < ListOfRecipes
            HandleRecipe={this.HandleRecipe}
            recipeId={this.state.recipeId}
            recipes={this.state.recipes}
            key={this.state.recipes.recipe_id}
          />
        )
      case 'Recipe':
        return (
          < Recipe
            recipe={this.state.recipe}
            recipeId={this.state.recipeID}
          />
        )
      default:
         return(
          < Home/>
         ) 
    }
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
        {this.WhatToRender()}
      </div>
    );
  }
}

export default App;
