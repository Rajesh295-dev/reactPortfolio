/* eslint-disable no-unused-vars */
import React from "react";
import { myWorks } from "../../myData";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imageSlider.css";

const CarouselContainer = () => {
  return (
    <Carousel className="image_slider">
      {myWorks.length > 0 &&
        myWorks.map((data, index) => {
          return (
            <Carousel.Item interval={3500} className="contentsWrapper">
              <div className="carouselContents">
                <img
                  className="d-block w-100 sliderImage"
                  src={data.projectImage}
                  alt="First slider"
                />

                <Carousel.Caption class="carousel-caption">
                  <div className="workCaption">
                    <h2 className="carouselHeader">
                      {" "}
                      {data.projectName}
                      <span> 📋 </span>
                    </h2>
                    <p className="carouselPara">{data.projectDesc}</p>
                    <h4 className="carouselHeader">
                      Technology<span> 🚀 </span>{" "}
                    </h4>
                    <p class="card-text">{data.technology} </p>

                    <div className="slider-btn">
                      <a
                        href={data.github_link}
                        target="_blank"
                        class="btn btn-primary"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>

                      <a
                        href={data.project_link}
                        target="_blank"
                        class="btn btn-primary"
                        rel="noreferrer"
                      >
                        Project
                      </a>
                    </div>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CarouselContainer;
