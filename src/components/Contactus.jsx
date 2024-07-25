import React from "react";
import Headnav from "./Headnav";
import "./Contactus.css";
function Contactus() {
  return (
    <div>
      <Headnav />
      <iframe
        className="link-contactus"
        style={{}}
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__oH7TXNUODZBVzRORUJYQ1pNRzgwWTFIWlFZWTRGTy4u&embed=true"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
export default Contactus;
