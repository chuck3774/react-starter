import React from 'react';
import exampleMovies from '../exampleMovies.js';
import MovieList from './MovieList.jsx';
import '../main.css';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {movies: [], movieToAdd: ''};

  }

  handleAddChange(e) {
    let movieObject = {title: e.target.value}
    this.setState({movies: this.state.movies, movieToAdd: movieObject}, function () {
      console.log(this.state.movieToAdd);
    });

  }

  handleAddClick() {
    let newList = [...this.state.movies, this.state.movieToAdd]
    this.setState({movies: newList, movieToAdd: ''})
  }

  handleSearchChange(e) {
    let list = this.state.movies;
    let filteredList = [];
   for (let i = 0; i < list.length; i ++) {
     if (list[i].title.includes(e.target.value)) {
       filteredList.push(list[i]);
     }
   }
   if (filteredList[0] === undefined) {
     this.setState({movies: [{title: 'Sorry, there was no movie found by that search. Please try again.'}], movieToAdd: this.state.movieToAdd})
   } else {
   this.setState({movies: filteredList, movieToAdd: this.state.movieToAdd});
   }
  }
  render(){
    return(
  <div>
    <div>
      <nav>
        <div><AddMovie onChange={this.handleAddChange.bind(this)} onAddClick={this.handleAddClick.bind(this)}/></div>
      </nav>
    </div>
    <div>
      <nav>
        <div><Search onChange={this.handleSearchChange.bind(this)}/></div>
      </nav>
    </div>
    <div>
        <div><MovieList movies={this.state.movies}/></div>

    </div>
  </div>
  )}
}

export default App;
