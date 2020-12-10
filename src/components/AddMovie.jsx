import React from 'react';
import '../main.css';

var AddMovie = (props) => (
  <div className="search-bar">
  <input className="form2" type="text"  onChange={(e) => props.onChange(e)}/>
  <button className="btn2" onClick={() => props.onAddClick()}>
    Add Movie
  </button>
</div>
);

export default AddMovie;