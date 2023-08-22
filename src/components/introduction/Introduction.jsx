import React from "react";
import "./introduction.css";

import Animation from "../animation/Animation";
import {
  AccountBalance,
  SchoolTwoTone,
  MenuBook,
  PlaceTwoTone,
} from "@material-ui/icons";

export default function Introduction() {
  return (
    <div className="introductionContainer" id="about">
      <div className="content">
        <div className="greeting">
          <h2>
            About Me <span className="waveHand"></span>
          </h2>
        </div>
        <hr className="borderLine" />
        <div className="aboutTitle">
          <strong>
            Venturing from Nepal's 🇳🇵 valleys to the vibrant tapestry of the
            East Coast 🇺🇸 , my journey unfolds.{" "}
          </strong>
        </div>
        <div className="aboutMe">
          <div className="imgCard">
            <img src="../images/introImg.jpg" alt="First slide" />
          </div>

          <p>
            {" "}
            I was born and raised in the vibrant and culturally rich city of
            Kathmandu, Nepal, surrounded by the majestic Himalayan mountains and
            a melting pot of diverse traditions. Growing up in this unique
            environment, I was exposed to a constant influx of tourists from
            around the globe, which sparked my curiosity and ignited my
            fascination with technology's transformative power. From an early
            age, I observed how technology had the ability to connect people,
            bridge gaps, and bring about positive change in society. I was
            captivated by the way it could enhance communication, improve
            efficiency, and open doors to endless possibilities. This
            realization kindled a deep-seated passion within me and ignited a
            desire to explore the field of technology, determined to make a
            difference in the lives of people in my community and beyond I made
            a bold decision to embark on a journey that seemed almost
            improbable—an expedition to unleash the potential of technology and
            bring about transformation by exploring my carrier in Science and
            Technology and I moved to this great country America for bachelor’s
            degree in computer science.
          </p>

          <p>
            As soon as I finished my Associate's degree in Information
            Technology at{" "}
            <a className="ccbc" href="https://www.ccbcmd.edu/">
              {" "}
              Community College of Baltimore County{" "}
            </a>{" "}
            , I made the decision to complete full-stack coding skills in order
            to advance my understanding of coding and web development and to
            begin my professional career in this sector. So, I enrolled in {" "}
            <a className="ccbc" href="https://lifelonglearning.jhu.edu/">
              {" "}
              John Hopkins University's{" "}
            </a>
            Coding Boot Camp and to elaborate more knowledge in computer I
            completed a Bachelor of  Science in Computer Science at{" "}
            <a className="wilmington" href="https://www.wilmu.edu/">
              {" "}
              Wilmington University{" "}
            </a>{" "}
            So, I am very optimistic and thrilled to develop productive,
            practical, and interactive applications for personal and business
            use.
          </p>
        </div>

        <hr className="borderLine" />

        <div className="educations">
          <h4>Academic Accomplishments</h4>
          <div className="degrees">
            <div id="colleges" className="degreeCard">
              <div className="degreeImg">
                <img src="../images/wilmington.webp" alt="First slide" />
              </div>
              <h4>
                <span>
                  {" "}
                  <AccountBalance />
                  &nbsp;{" "}
                </span>
                <a className="wilmington" href="https://www.wilmu.edu/">
                  {" "}
                  Wilmington University{" "}
                </a>{" "}
              </h4>

              <p>
                {" "}
                <span>
                  <MenuBook />
                  &nbsp;
                </span>
                Computer Science in Bachelor Degree
              </p>
              <p>
                <span>
                  <SchoolTwoTone />
                  &nbsp;{" "}
                </span>
                Graduated 2023
              </p>
              <p>
                <span>
                  <PlaceTwoTone />
                  &nbsp;{" "}
                </span>
                Delware, Wilmington
              </p>
            </div>

            <div id="ccbc" className="degreeCard">
              <div className="degreeImg">
                <img src="../images/ccbc.jpeg" alt="First slide" />
              </div>
              <h4>
                {" "}
                <span>
                  {" "}
                  <AccountBalance />
                  &nbsp;{" "}
                </span>
                <a className="ccbc" href="https://www.ccbcmd.edu/">
                  {" "}
                  Community College of Baltimore County{" "}
                </a>{" "}
              </h4>

              <p>
                {" "}
                <span>
                  <MenuBook />
                  &nbsp;
                </span>
                Associate Degree
              </p>
              <p>
                <span>
                  <SchoolTwoTone />
                  &nbsp;{" "}
                </span>
                Graduated 2021
              </p>
              <p>
                <span>
                  <PlaceTwoTone />
                  &nbsp;{" "}
                </span>
                Baltimore, Essex
              </p>
            </div>

            <div id="bootCamp" className="degreeCard">
              <div className="degreeImg">
                <img src="../images/jhu.png" alt="First slide" />
              </div>
              <h4>
                {" "}
                <span>
                  {" "}
                  <AccountBalance />
                  &nbsp;{" "}
                </span>
                <a className="ccbc" href="https://lifelonglearning.jhu.edu/">
                  {" "}
                  John Hopkins University{" "}
                </a>
              </h4>

              <p>
                {" "}
                <span>
                  <MenuBook />
                  &nbsp;
                </span>
                Coding Boot Camp
              </p>
              <p>
                <span>
                  <SchoolTwoTone />
                  &nbsp;{" "}
                </span>
                Graduated 2021
              </p>
              <p>
                <span>
                  <PlaceTwoTone />
                  &nbsp;{" "}
                </span>
                Baltimore, City
              </p>
            </div>
            <div id="highSchool" className="degreeCard">
              <div className="degreeImg">
                <img src="../images/pentagon.png" alt="First slide" />
              </div>
              <h4>
                {" "}
                <span>
                  {" "}
                  <AccountBalance /> &nbsp;
                </span>
                <a className="ccbc" href="https://www.pentagon.edu.np/">
                  Pentagon Int'l College{" "}
                </a>{" "}
              </h4>

              <p>
                {" "}
                <span>
                  <MenuBook /> &nbsp;
                </span>
                Intermediate Degree in Physics
              </p>
              <p>
                <span>
                  <SchoolTwoTone />
                  &nbsp;{" "}
                </span>
                Graduated 2015
              </p>
              <p>
                <span>
                  <PlaceTwoTone />
                  &nbsp;{" "}
                </span>
                Kathmandu, Nepal
              </p>
            </div>
          </div>
          <strong className="scrollMessage">
            Scroll to the left & right for more cards.
          </strong>
        </div>
        <hr className="borderLine" />

        <div className="extraActivities">
          <h4>Why Computer Science Is My Carrier! </h4>
          <div id="roboticsImg" className="activities">
            <div className="item">
              <p>
                <strong>Curious Science Enthusiast:</strong> During high school
                years majoring in intermediate level Physics provided me with a
                wide understanding of the fundamental principles governing our
                universe. Delving into the complexities of theoretical concepts,
                I found joy in unraveling the secrets of nature's forces and
                phenomena.
              </p>

              <div className="myImage">
                <img src="../images/physics.jpeg" alt="First slide" />
              </div>
            </div>

            <div className="item">
              <p>
                <strong>Robotic Innovator:</strong> Actively engaged in high
                school robotics competitions, where I honed my problem-solving
                skills and collaborative spirit and construct innovative
                prototype robotic solutions, demonstrating creativity and
                technical skills. I had chance to work with Arduino circuit
                board.
              </p>
              <div className="myImage">
                <img
                  src="../images/roboimage.jpeg"
                  width="100px"
                  alt="First slide"
                />
              </div>
            </div>

            <div className="item">
              <p>
                <strong>Tech Explorer and Computer Science Graduate:</strong> My
                keen interest with computer-related breakthroughs led me to
                pursue a degree in computer science. The world of coding,
                algorithms, and software development became my canvas for
                creative expression and innovative problem-solving.
              </p>
              <div className="myImage">
                <img src="../images/robotimg.jpeg" alt="First slide" />
              </div>
            </div>

            <div className="item">
              <p>
                <strong>Dean's List Honoree:</strong> Recognized for exceptional
                academic performance with a consecutive three-semester presence
                on the dean's list at Wilmington University, a testament to my
                dedication and consistent pursuit of excellence.
              </p>
              <div className="myImage">
                <img src="../images/wilmu.png" alt="First slide" />
              </div>
            </div>

            <div className="item">
              <p>
                <strong>Curiosity-Driven Learning:</strong> My enthusiasm for
                learning drives me to constantly seek out to learn new skills,
                whether its playing musical instruments or unraveling the
                intricacies of programming languages. I always enjoy pushing my
                boundaries in the realms of achieveing accomplisments and
                professional growth.
              </p>
              <div className="myImage">
                <img src="../images/myGuitar.jpg" alt="First slide" />
              </div>
            </div>
          </div>
        </div>

        <hr className="borderLine" />
        <Animation />
        <hr className="borderLine" />
      </div>
    </div>
  );
}
