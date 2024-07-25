import React, { useState } from "react";
import { Link } from "react-router-dom";
import Headnav from ".././Headnav";
import Footer from "../Footer";
import "./pages.css";

export const Book13 = () => {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1eXpo4R6CG2PM6b1x1FF1sNwUQuP7VG1P/preview"
  );

  return (
    <>
      <Headnav />
      <div className="cta-container">
        <p className="pname">
          Want to read the next book? <br />
          Don’t worry, I got you{" "}
          <Link className="link-p" to="/Book14">
            <b>click me</b>
          </Link>
        </p>
      </div>
      <div className="container">
        <iframe src={embedURL}></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Book13;
