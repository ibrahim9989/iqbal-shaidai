import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="header-container">
          <img
            className="head-image"
            src="image/fountain-pen-close-up.png"
            alt="pen-image"
          />
          <Link className="link-line" to="/">
            <h1 className="headname">Iqbal Shaidai</h1>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="navbar-toggler-icon"></span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Shayari">
                <img src="image/align-left.png" alt="shayari-icon" />
                Shayari
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Books">
                <img src="image/open-book.png" alt="books-icon" />
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                <img src="image/info.png" alt="about-icon" />
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <img src="image/contact-mail.png" alt="books-icon" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
