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
        src="https://docs.google.com/forms/d/e/1FAIpQLScax3OBKxLAb2HA7BvRhanYAYGs2vC-mszkUobWZGCSD229IA/viewform?embedded=true"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
export default Contactus;
