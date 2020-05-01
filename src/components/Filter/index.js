import React from "react";
import "./style.css";

function Filter(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search by Team</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Team"
          id="search"
        />
      
        <button onClick={props.handleFilterSubmit} className="btn btn-primary">
          Filter
        </button>
        <button onClick={props.handleFilterClear} className="btn btn-primary">
          Clear Filter
        </button>
      </div>
    </form>
  );
}

export default Filter;

