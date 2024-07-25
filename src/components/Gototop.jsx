import React, { useEffect, useState } from "react";

function Gototop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true); // Show the button when user scrolls down
    } else {
      setIsVisible(false); // Hide the button when user is at the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth transition to top
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="scrollToTop"
      title="Go to top"
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "99",
        fontSize: "18px",
        border: "none",
        outline: "none",
        backgroundColor: "#31363f",
        color: "#d7bf9f",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      ^
    </button>
  );
}

export default Gototop;
