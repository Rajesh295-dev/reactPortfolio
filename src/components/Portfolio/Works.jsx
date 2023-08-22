import React from "react";
import CarouselContainer from "../../components/imageSlider/ImageSlider";

import "./works.css";

export default function Works() {
  return (
    <div className="workPage" id="works">
      <div className="portfolioPage ">
        <h1>
          My Recent Projects<span> 🗂 🛠️</span>{" "}
        </h1>

        <div className="sliderWrapper">
          <CarouselContainer />
        </div>

        <div class="sliderLinks">
          <h5>
            To explore the source codes 💻 please click the{" "}
            <strong> GitHub</strong> button and to preview the project 📲 click
            the <strong> Project</strong> button on slider. I hope you'll like
            it!
          </h5>
        </div>
      </div>
    </div>
  );
}
