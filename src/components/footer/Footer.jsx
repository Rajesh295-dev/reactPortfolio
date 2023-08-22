import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Instagram, Facebook, LinkedIn, GitHub } from "@material-ui/icons";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footerIcons">
      <div class="row align-items-center">
        <div className="footerList  py-3 my-7">
          <div className=" copyright ">
            <p className="text-xs-center">Full Stack developer</p>
          </div>
          <ul className="nav  justify-content-flex list-unstyled d-flex">
            <a
              className="underline"
              href="https://github.com/Rajesh295-dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHub />{" "}
            </a>
            <a
              className="underline"
              href="https://www.linkedin.com/in/rajesh-gautam-472511218/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            <a
              className="underline"
              href="https://github.com/Rajesh295-dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Instagram />{" "}
            </a>
            <a
              className="underline"
              href="https://www.linkedin.com/in/rajesh-gautam-472511218/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Facebook />
            </a>
          </ul>

          <div className=" copyright ">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Rajesh Gautam - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
