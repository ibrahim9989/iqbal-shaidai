import React from "react";
import "./Books.css";
import Card3 from "./Card3";
import cardcontent3 from "../Cardcontent3";
function CreateEntry(Cardg) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8" key={Cardg.id}>
      <Card3
        heading={Cardg.heading}
        paragraph={Cardg.paragraph}
        buttonText={Cardg.buttonText}
        Link={Cardg.link}
      />
    </div>
  );
}

const Books3 = ({ heading, paragraph, buttonText, link }) => {
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
      <div className="row ">{cardcontent3.map(CreateEntry)}</div>
    </div>
  );
};

export default Books3;
