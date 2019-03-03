import React, { Component } from 'react';
import './App.css';
import dayName from './dayName';

import meals from './meals';

class App extends Component {
  render() {
    const todayIndex = new Date().getDay();

    const todayMeal = meals.find(x => x.days.includes(todayIndex));

    const todayIngredients = todayMeal.ingredients.map(ingredient => (
      <li key={ingredient.name}>{ingredient.name}</li>
    ));

    return (
      <div className="App">
        <div>Heute ist {dayName(todayIndex)}</div>
        <div>Es gibt: {todayMeal.name}</div>
        <div>Zutaten:</div>
        <ul>{todayIngredients}</ul>
        <div>Infos: {todayMeal.notes}</div>
      </div>
    );
  }
}

export default App;
