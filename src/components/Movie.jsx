import React from 'react';
import '../main.css';
import exampleMovies from '../exampleMovies.js';
var Movie = (props) => (
  <div className="movie-body">
   <div className="movie-list-title" onClick={() => {
     let element = document.getElementById(`panel-${props.movie.title}`);
     if (element.style.display === 'block') {
      element.style.display = 'none';
     } else {
       element.style.display = 'block';}
    }
   }>
      {props.movie.title}
       <div className="panel" id={`panel-${props.movie.title}`}>
         <div className="movie-info">
          <div className="movie-data">
          year: {exampleMovies[0].year};
          </div>
          <div className="movie-data">
          runtime: {exampleMovies[0].runtime};
          </div>
          <div className="movie-data">
          Metascore: {exampleMovies[0].Metascore};
          </div>
          <div className="movie-data">
          imbdRating: {exampleMovies[0].imbdRating};
          </div>
         </div>
       <button className="btn3" onClick={(e) =>
    {props.onWatchedClick(e);
}} title={props.movie.title}>watched</button>
<img className="image" src="https://collegian.csufresno.edu/a/wp-content/uploads/2007/10/f_universe_cover.jpg" alt="Across the universe"></img>
       </div>
    </div>
    <div className="">
    </div>

  </div>

);

export default Movie;