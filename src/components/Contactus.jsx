import React from "react";
import Headnav from "./Headnav";
import "./Contactus.css";
function Contactus() {
  return (
    <div>
      <Headnav />
      <iframe
        className="link-contactus"
        title="iframe contact"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAADUi1S1URU1UTFFMVk00NlY3VjA5STEwRUY1Q1ZEMy4u&embed=true"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
export default Contactus;
