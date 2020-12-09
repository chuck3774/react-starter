import React from 'react';
import exampleMovies from '../exampleMovies.js';
import MovieList from './MovieList.jsx';
import '../main.css';
import Search from './Search.jsx'

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {movies: exampleMovies};

  }

  handleChange(e) {
    let list = this.state.movies;
    let filteredList = [];
   for (let i = 0; i < list.length; i ++) {
     if (list[i].title.includes(e.target.value)) {
       filteredList.push(list[i]);
     }
   }
   if (filteredList[0] === undefined) {
     this.setState({movies: [{title: 'Sorry, there was no movie found by that search. Please try again.'}]})
   } else {
   this.setState({movies: filteredList});
   }

   if (e.target.value === '') {
     this.setState({movies: exampleMovies});
   }
  }
  handleSubmit() {

    console.log(document.getElementsByClassName('form'));
  }
  render(){
    return(
  <div>
    <div>
      <nav>
        <div><Search onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}/></div>
      </nav>

    </div>
    <div>
        <div><MovieList movies={this.state.movies}/></div>

    </div>
  </div>
  )}
}

export default App;
