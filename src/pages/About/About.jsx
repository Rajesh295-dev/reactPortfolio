import React from "react";
import Introduction from "../../components/introduction/Introduction";
import Footer from "../../components/footer/Footer";
import "./about.css";
export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutContainer">
        <Introduction />
        <Footer />
      </div>
    </div>
  );
}
