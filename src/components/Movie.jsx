import React from 'react';
import '../main.css';
var Movie = (props) => (
  <div className="movie-body">
   <div className="movie-list-title">
      {props.movie.title}
    </div>
    <button className="btn3" onClick={(e) =>
    {
      props.onWatchedClick(e);


    }} title={props.movie.title}>watched</button>
  </div>

);

export default Movie;