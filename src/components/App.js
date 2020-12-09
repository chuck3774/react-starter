import React from 'react';
import exampleMovies from '../exampleMovies.js';
import MovieList from './MovieList.jsx';
import '../main.css';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {movies: exampleMovies};

  }
  render(){
    return(
    <div>
        <div><MovieList movies={this.state.movies}/></div>

    </div>
  )}
}

export default App;
