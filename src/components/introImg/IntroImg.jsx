import React from "react";
import "./introImg.css";
export default function IntroImg() {
  return (
    <div className="introCard" id="home">
      <div className="titleCard">
        <h2>Namaste</h2>
        <span className="namaste">🙏</span>
        <h4> I'm Rajesh Gautam</h4>
      </div>
      <div className="imgCard">
        <img src="../images/introImg.jpg" alt="First slide" />
      </div>
      <div className="subTitleCard">
        <p>
          I am very excited and thrilled to contribute my knowledge to develop
          practical, productive, and interactive applications for personal and
          business need.
        </p>
      </div>
    </div>
  );
}
