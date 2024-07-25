import React from "react";
import { Link } from "react-router-dom";

function Card4(props) {
  return (
    <div className="card-container2 ">
      <h5 className="card-heading2">{props.heading}</h5>
      <p className="card-paragraph2">{props.paragraph}</p>
      <Link to={props.Link} className="card-button2">
        {props.buttonText}
      </Link>
    </div>
  );
}

export default Card4;
