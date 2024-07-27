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
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oH7TXNUMTA2QVBaT0tPWDE5UFRDQTVZN0dKUjgyNy4u&embed=true"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
export default Contactus;
