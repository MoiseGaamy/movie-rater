import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppNavigator from './components/AppNavigator.js';
import Favorites from './containers/Favorites.js';
import MovieDetails from './containers/MovieDetails.js';
import MovieRater from './containers/MovieRater.js';

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Route exact path="/" component={MovieRater} />      
      <Route path="/movie/:id" component={MovieDetails} />      
      <Route path="/favorite" component={Favorites} />          
    </Router>
  )
}


