import React from "react";
import { Link } from "react-router-dom";

function Headnav() {
  return (
    <div>
      <div
        className="header-container"
        style={{ paddingLeft: "20px", paddingTop: "20px" }}
      >
        <img
          className="head-image"
          src="image/fountain-pen-close-up.png"
          alt="pen-image"
        />
        <Link className="link-line" to="/">
          <h1 className="headname">Iqbal Shaidai</h1>
        </Link>
      </div>
    </div>
  );
}

export default Headnav;
