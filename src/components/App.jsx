import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Shayari from "./Shayari";
import Booksmain from "./Booksmain";
import About from "./About";
import Gototop from "./Gototop";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Gototop />
      <Navbar />
      <Info />
      <Shayari />
      <About />
      <Booksmain />
      <Footer />
    </div>
  );
}

export default App;
