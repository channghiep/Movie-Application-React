import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Components/movies';
import axios from 'axios'
import MoviesContainer from './MoviesContainers/MoviesContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import MoviesPopContainer from './PopContainers/MoviesPopContainer';
import Navbar from './Navigation/navbar';
import TvsContainer from './TvContainers/TvsContainer'
import SearchMoviesContainer from './SearchContainers/SearchMoviesContainer'
import SearchTvsContainer from './SearchContainers/SearchTvsContainer'
import SearchMultiContainer from './SearchContainers/SearchMultiContainer'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'react-bootstrap';

class App extends Component {
  render(){
  return (
    < Router>
    <div className="App">
      <header className="App-header">
      <h1 className='App-title'>Movies</h1>
  
    
      </header>
      {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="/Containers">Action</Dropdown.Item>
  <Dropdown.Item href="/TvContainers">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */}
      
      <Navbar/>
    
      <Route exact path='/' component={() => <MoviesContainer sort="now_playing"/>}/>
    
      <Route exact path='/MoviesPopContainers' component={() => <MoviesContainer sort="popular"/>}/>
      <Route exact path='/MoviesTopRatedContainers' component={() => <MoviesContainer sort="top_rated"/>}/>
      <Route exact path='/MoviesUpComingContainers' component={() => <MoviesContainer sort="upcoming"/>}/>


      <Route exact path='/TvContainers' component={() => <TvsContainer sort="airing_today"/>}/>
      <Route exact path='/TvOnAirContainers' component={() => <TvsContainer sort="on_the_air"/>}/>
      <Route exact path='/TvPopularContainers' component={() => <TvsContainer sort="popular"/>}/>
      <Route exact path='/TvTopRatedContainers' component={() => <TvsContainer sort="top_rated"/>}/>

      <Route exact path='/SearchMoviesContainers' component={() => <SearchMoviesContainer filter="movie"/>}/>
      <Route exact path='/SearchMultiContainers' component={() => <SearchMultiContainer filter="multi"/>}/>
      <Route exact path='/SearchTvsContainers' component={() => <SearchTvsContainer filter="tv"/>}/>


    </div>
 
    
    </Router>

  );
  }
}

export default App;
