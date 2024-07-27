import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headnav from ".././Headnav";
import Footer from "../Footer";
import "./pages.css";

export const Book18 = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1Q-c1w_GLmCCgUME-83Ks0FeRV_P8wOCy/preview"
  );

  return (
    <>
      <Headnav />
      <div className="cta-container">
        <p className="pname">
          Want to read the next book? <br />
          Don’t worry, I got you{" "}
          <Link className="link-p" to="/Book19">
            <b>click me</b>
          </Link>
        </p>
      </div>
      <div className="container">
        <iframe
          src={embedURL}
          title="Book 18 Preview"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Book18;
