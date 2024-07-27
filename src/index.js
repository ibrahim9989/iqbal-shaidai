import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Books from "./components/Books";
import Books2 from "./components/Books2";
import Books3 from "./components/Books3";
import Books4 from "./components/Books4";
import Contactus from "./components/Contactus";
import "./styles.css";
import {
  Book1,
  Book2,
  Book3,
  Book4,
  Book5,
  Book6,
  Book7,
  Book8,
  Book9,
  Book10,
  Book11,
  Book12,
  Book13,
  Book14,
  Book15,
  Book16,
  Book17,
  Book18,
  Book19,
  Book20,
  Book21,
  Book22,
  Book23,
  Book24,
  Book25,
  Book26,
  Book27,
  Book28,
  Book29,
} from "./components/pages/Allpages";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Books2" element={<Books2 />} />
      <Route path="/Books3" element={<Books3 />} />
      <Route path="/Books4" element={<Books4 />} />
      <Route path="/About" element={<About />} />
      <Route path="/Book1" element={<Book1 />} />
      <Route path="/Book2" element={<Book2 />} />
      <Route path="/Book3" element={<Book3 />} />
      <Route path="/Book4" element={<Book4 />} />
      <Route path="/Book5" element={<Book5 />} />
      <Route path="/Book6" element={<Book6 />} />
      <Route path="/Book7" element={<Book7 />} />
      <Route path="/Book8" element={<Book8 />} />
      <Route path="/Book9" element={<Book9 />} />
      <Route path="/Book10" element={<Book10 />} />
      <Route path="/Book11" element={<Book11 />} />
      <Route path="/Book12" element={<Book12 />} />
      <Route path="/Book13" element={<Book13 />} />
      <Route path="/Book14" element={<Book14 />} />
      <Route path="/Book15" element={<Book15 />} />
      <Route path="/Book16" element={<Book16 />} />
      <Route path="/Book17" element={<Book17 />} />
      <Route path="/Book18" element={<Book18 />} />
      <Route path="/Book19" element={<Book19 />} />
      <Route path="/Book20" element={<Book20 />} />
      <Route path="/Book21" element={<Book21 />} />
      <Route path="/Book22" element={<Book22 />} />
      <Route path="/Book23" element={<Book23 />} />
      <Route path="/Book24" element={<Book24 />} />
      <Route path="/Book25" element={<Book25 />} />
      <Route path="/Book26" element={<Book26 />} />
      <Route path="/Book27" element={<Book27 />} />
      <Route path="/Book28" element={<Book28 />} />
      <Route path="/Book29" element={<Book29 />} />
    </Routes>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
