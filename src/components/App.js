import React from 'react';
import exampleMovies from '../exampleMovies.js';
import MovieList from './MovieList.jsx';
import '../main.css';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {movies: [], movieToAdd: '', previousList: [], filteredList: []};

  }

  handleWatchedListClick () {
    if (this.state.filteredList[0] === undefined) {
    let currentMovies = this.state.movies;
    let watchedMovies = [];
    for (let i = 0; i < currentMovies.length; i ++) {
      if (currentMovies[i].watched) {
        watchedMovies.push(currentMovies[i]);
      }
    }
    if (watchedMovies[0] === undefined) {this.setState({movies: [{title: 'You have not watched any movies yet!', watched: true}], movieToAdd: this.state.movieToAdd, previousList: currentMovies, filteredList: watchedMovies})} else {
    this.setState({movies: watchedMovies, movieToAdd: this.state.movieToAdd, previousList: currentMovies, filteredList: watchedMovies})
    }
  } else {
    let currentMovies = this.state.previousList;
    let watchedMovies = [];
    for (let i = 0; i < currentMovies.length; i ++) {
      if (currentMovies[i].watched) {
        watchedMovies.push(currentMovies[i]);
      }
    }
    if (watchedMovies[0] === undefined) {this.setState({movies: [{title: 'You have not watched any movies yet!', watched: true}], movieToAdd: this.state.movieToAdd, previousList: currentMovies, filteredList: watchedMovies})} else {
    this.setState({movies: watchedMovies, movieToAdd: this.state.movieToAdd, previousList: currentMovies, filteredList: watchedMovies})
    }
  }

  }

  handleToWatchListClick () {
    let currentMovies = this.state.previousList;
    let toWatchMovies = [];
    for (let i = 0; i < currentMovies.length; i ++) {
      if (!currentMovies[i].watched) {
        toWatchMovies.push(currentMovies[i]);
      }
    }
    this.setState({movies: toWatchMovies, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: toWatchMovies})
  }

  handleWatchedClick (e) {
    let currentMovie = (e.target.title);
    let currentMovies = this.state.movies;
    for (let i = 0; i < currentMovies.length; i ++) {
      if (currentMovies[i].title === currentMovie) {
        currentMovies[i].watched = !currentMovies[i].watched;
        console.log(currentMovies[i]);
      }
    }
    this.setState({movies: currentMovies, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList})
  }

  handleAddChange(e) {
    if (this.state.movies[0] !== undefined) {
    if (this.state.movies[0].watched) {
    let movieObject = {title: e.target.value, watched: true}
    console.log(movieObject);
    this.setState({movies: this.state.movies, movieToAdd: movieObject, previousList: this.state.previousList, filteredList: this.state.filteredList});
    } else {
      let movieObject = {title: e.target.value, watched: false}
      console.log(movieObject);
      this.setState({movies: this.state.movies, movieToAdd: movieObject, previousList: this.state.previousList, filteredList: this.state.filteredList});
    }
  } else {
    let movieObject = {title: e.target.value, watched: false}
      console.log(movieObject);
      this.setState({movies: this.state.movies, movieToAdd: movieObject, previousList: this.state.previousList, filteredList: this.state.filteredList});
  }

  }

  handleAddClick() {
    let newList = [...this.state.movies, this.state.movieToAdd]
    this.setState({movies: newList, movieToAdd: '', previousList: [...this.state.previousList, this.state.movieToAdd], filteredList: this.state.filteredList})
  }

  handleSearchClick() {
    if (this.state.filteredList[0] !== undefined) {
      this.setState({movies: this.state.movies, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList})
    } else {

      this.setState({movies: this.state.movies, movieToAdd: this.state.movieToAdd, previousList: this.state.movies, filteredList: this.state.filteredList})
    }
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
     this.setState({movies: [{title: 'Sorry, there was no movie found by that search. Please try again.'}], movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList})
   } else {
   this.setState({movies: filteredList, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList});
   }

   if (e.target.value === '') {
     if(this.state.filteredList[0] !== undefined) {
      this.setState({movies: this.state.filteredList, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList});
     } else {
        this.setState({movies: this.state.previousList, movieToAdd: this.state.movieToAdd, previousList: this.state.previousList, filteredList: this.state.filteredList});
     }
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
        <div><MovieList onWatchedListClick={this.handleWatchedListClick.bind(this)} onToWatchListClick={this.handleToWatchListClick.bind(this)} movies={this.state.movies} onWatchedClick={this.handleWatchedClick.bind(this)}/></div>

    </div>
  </div>
  )}
}

export default App;
