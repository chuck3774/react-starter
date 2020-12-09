import React from 'react';
import '../main.css';
var Movie = (props) => (
  <div className="movie-body">
   <div className="movie-list-title">
      {props.movie.title}
    </div>
  </div>

);

export default Movie;