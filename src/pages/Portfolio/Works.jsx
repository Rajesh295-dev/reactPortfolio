import React from "react";
import CarouselContainer from "../../components/imageSlider/ImageSlider";
import Footer from "../../components/footer/Footer";

//import ImageSlider from "../imageSlider/ImageSlider";
//import { myWorks } from "../../myData";

import "./works.css";

export default function Works() {
  return (
    <div className="flex-column ">
      <div class="workContainer">
        <h1>
          My Recent Projects<span> 🗂📚 </span>{" "}
        </h1>
      </div>
      <CarouselContainer />
      <Footer />
    </div>
  );
}

/*

{myWorks.map((p) => (
  <CarouselContainer key={p.id} imageSlider={p} />
))}

*/
//
