import React from 'react';
import '../main.css';

var Search = (props) => (
  <div className="search-bar">
  <input className="form" type="text" onChange ={(e) => props.onChange(e)}/>
  <button className="btn">
    Search
  </button>
</div>
);

export default Search;