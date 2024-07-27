import React from "react";
import "./Books.css";
import Card from "./Card";
import cardcontent from "../Cardcontent";
import Headnav from "./Headnav";
function CreateEntry(Cardg) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8" key={Cardg.id}>
      <Card
        heading={Cardg.heading}
        paragraph={Cardg.paragraph}
        buttonText={Cardg.buttonText}
        Link={Cardg.link}
      />
    </div>
  );
}

const Books = ({ heading, paragraph, buttonText, link }) => {
  return (
    <div>
      <Headnav />
      <div className="row ">{cardcontent.map(CreateEntry)}</div>
    </div>
  );
};

export default Books;
