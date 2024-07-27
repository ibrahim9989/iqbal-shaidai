import React from "react";
import "./Books.css";
import Card2 from "./Card2";
import cardcontent2 from "../Cardcontent2";
function CreateEntry(Cardg) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8" key={Cardg.id}>
      <Card2
        heading={Cardg.heading}
        paragraph={Cardg.paragraph}
        buttonText={Cardg.buttonText}
        Link={Cardg.link}
      />
    </div>
  );
}

const Books2 = ({ heading, paragraph, buttonText, link }) => {
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
      <div className="row ">{cardcontent2.map(CreateEntry)}</div>
    </div>
  );
};

export default Books2;
