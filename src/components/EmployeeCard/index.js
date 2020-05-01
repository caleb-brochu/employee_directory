import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <h2>{props.name}</h2>
        <h4>{props.occupation}</h4>
        <ul>
          <li>
          <strong>Team: </strong>{props.team}
          </li>
          <li>
          <strong>Tenure: </strong>{props.tenure}
          </li>
          <li>
          <strong>Location: </strong>{props.location}
          </li>
          <li>
          <strong>Email: </strong>{props.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
