import React from 'react';
import exampleMovies from '../exampleMovies.js';
import MovieList from './MovieList.jsx';
import '../main.css';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {movies: [], movieToAdd: '', previousList: []};

  }

  handleAddChange(e) {
    let movieObject = {title: e.target.value}
    this.setState({movies: this.state.movies, movieToAdd: movieObject, previousList: this.state.previousList});

  }

  handleAddClick() {
    let newList = [...this.state.movies, this.state.movieToAdd]
    this.setState({movies: newList, movieToAdd: '', previousList: this.state.previousList})
  }

  handleSearchClick() {
    this.setState({movies: this.state.movies, movieToAdd: this.state.movieToAdd, previousList: this.state.movies})
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
   this.setState({movies: filteredList, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList});
   }

   if (e.target.value === '') {
     this.setState({movies: this.state.previousList, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList});
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
        <div><Search onChange={this.handleSearchChange.bind(this)} onSearchClick={this.handleSearchClick.bind(this)}/></div>
      </nav>
    </div>
    <div>
        <div><MovieList movies={this.state.movies}/></div>

    </div>
  </div>
  )}
}

export default App;
