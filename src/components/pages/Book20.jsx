import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headnav from ".././Headnav";
import Footer from "../Footer";
import "./pages.css";

export const Book20 = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/122nfHBIX288rnc_-tLyaCs6Ydk6oT3-r/preview"
  );

  return (
    <>
      <Headnav />
      <div className="cta-container">
        <p className="pname">
          Want to read the next book? <br />
          Don’t worry, I got you{" "}
          <Link className="link-p" to="/Book21">
            <b>click me</b>
          </Link>
        </p>
      </div>
      <div className="container">
        <iframe
          src={embedURL}
          title="Book 20 Preview"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Book20;
