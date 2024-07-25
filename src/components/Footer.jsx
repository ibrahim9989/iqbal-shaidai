import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id="contact">
        <i className="social-icon fa-brands fa-facebook"></i>
        <i className="social-icon fa-brands fa-twitter"></i>
        <i className="social-icon fa-brands fa-instagram"></i>
        <p className="footer-info">
          {currentYear}© Copyright Iqbal Shaidai
          <br /> Developed by{" "}
          <a className="footer-link" href="">
            <b>MD. Aziz Ur Rahman</b>
          </a>{" "}
          as part of an internship by{" "}
          <a className="footer-link" href="https://www.leeza.app/">
            <b>Leeza.app</b>
          </a>
        </p>
        <p>
          want to get contact with us ?{" "}
          <Link className="footer-link" to="/Contactus">
            <b>Click Here</b>
          </Link>
        </p>
      </footer>
    </>
  );
}
export default Footer;
