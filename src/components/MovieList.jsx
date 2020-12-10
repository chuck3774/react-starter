import React from 'react';
import Movie from './Movie.jsx';
import '../main.css';

var MovieList = (props) => (
  <div className="media-body">
    <button id="watched" className="btn4" onClick={() => {props.onWatchedListClick();
    let element = document.getElementById('watched');
    element.classList.toggle("click-list-style");
    let element2 = document.getElementById('toWatch');
    element2.classList.toggle("click-list-style");
    }
  }>Watched List</button>
    <button id="toWatch" className="btn5 click-list-style" onClick={() => {
     props.onToWatchListClick();
     let element = document.getElementById('watched');
     element.classList.toggle("click-list-style");
     let element2 = document.getElementById('toWatch');
     element2.classList.toggle("click-list-style");
     }}>To Watch List</button>

     <div className="movie-list">{
     props.movies.map((movObj, i) => {
       return <Movie movie={movObj} key={i} onWatchedClick={props.onWatchedClick}/>;
    })}
    </div>
  </div>
);

export default MovieList;