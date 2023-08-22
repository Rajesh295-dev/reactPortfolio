import React from "react";
import IntroImg from "../../components/introImg/IntroImg";
import Footer from "../../components/footer/Footer";
import Portfolio from "../../components/Portfolio/Works";
import About from "../../components/About/About";
import Contact from "../../components/contact/Contact";
import Resume from "../../components/Resume/Resume";

import Skills from "../../components/TechStack/Skills";
import "./home.css";
export default function Home() {
  return (
    <div className="homePage">
      <div className="homeContainer">
        <IntroImg />
        <Skills />
        <Portfolio />
        <About />
        <Resume />
        <Contact />
        <hr className="borderLine" />
        <Footer />
      </div>
    </div>
  );
}
