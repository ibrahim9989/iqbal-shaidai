import React from "react";
import "./Books.css";
import Navbar from "./Navbar";
import Card4 from "./Card4";
import cardcontent4 from "../Cardcontent4";
function CreateEntry(Cardg) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8" key={Cardg.id}>
      <Card4
        heading={Cardg.heading}
        paragraph={Cardg.paragraph}
        buttonText={Cardg.buttonText}
        Link={Cardg.link}
      />
    </div>
  );
}

const Books4 = ({ heading, paragraph, buttonText, link }) => {
  return (
    <div>
      <div class="header-container2">
        <img
          class="head-image2"
          src="image/fountain-pen-close-up.png"
          alt="pen-image"
        />
        <h1 class="headname2">Iqbal Shaidai</h1>
      </div>
      <div className="row ">{cardcontent4.map(CreateEntry)}</div>
    </div>
  );
};

export default Books4;
