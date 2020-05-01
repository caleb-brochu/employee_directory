import React from "react";
import "./style.css";

function Sort(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Sort by:</label>
        <br/>
        <button onClick={props.handleSortName} className="btn btn-primary">
          Name
        </button>
        <button onClick={props.handleSortTenure} className="btn btn-primary">
          Tenure
        </button>
        <button onClick={props.handleSortLocation} className="btn btn-primary">
          Location
        </button>
      </div>
    </form>
  );
}

export default Sort;
