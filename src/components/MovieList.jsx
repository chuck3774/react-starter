import React from 'react';
import Movie from './Movie.jsx';
import '../main.css';

var MovieList = (props) => (
  <div className="movie-list">{props.movies.map((movObj, i) => {
       return <Movie movie={movObj} key={i}/>;
    })}
  </div>
);

export default MovieList;