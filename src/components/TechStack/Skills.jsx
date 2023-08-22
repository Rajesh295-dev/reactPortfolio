import React from "react";
import pdfFile from "../../resumeFiles/sample.pdf";
import mswordFile from "../../resumeFiles/sample1.docx";
import { PictureAsPdfTwoTone, DescriptionSharp } from "@material-ui/icons";

import "./skills.css";

export default function Skills() {
  return (
    <center>
      <div className="skillsContainer">
        <h2 id="techSkills">Technologies</h2>
        <div>
          <i className="icon devicon-html5-plain-wordmark colored"></i>
          <i className="icon devicon-css3-plain-wordmark colored"></i>
          <i className="icon devicon-javascript-plain colored"></i>

          <br />

          <br />
          <i className="icon devicon-nodejs-plain colored"></i>
          <i className="icon devicon-nodejs-plain-wordmark "></i>
          <i className="icon devicon-react-original-wordmark colored"></i>
          <i className="icon devicon-jquery-plain-wordmark colored"></i>
          <i className="icon devicon-express-original colored"></i>
          <br />
          <br />
          <i className="icon sp devicon-mysql-plain-wordmark colored"></i>
          <i className="icon devicon-sequelize-plain colored"></i>
          <i className="icon devicon-mongodb-plain-wordmark colored"></i>
          <i className="icon devicon-yarn-plain-wordmark colored"></i>
          <i className="icon devicon-heroku-line-wordmark colored"></i>
          <br />
          <br />
          <i className="icon devicon-github-original-wordmark colored"></i>
          <i className="icon devicon-git-plain-wordmark"></i>
          <i className="icon devicon-bootstrap-plain-wordmark colored"></i>
          <i className="icon devicon-vscode-plain-wordmark colored"></i>
          <i className="icon devicon-slack-plain-wordmark colored"></i>
          <br />
          <br />

          <i className="icon devicon-tailwindcss-plain colored"></i>

          <i className="icon devicon-nextjs-original-wordmark colored"></i>
        </div>

        <h4>Explore Resume</h4>
        <div className="printableFiles">
          <div className="wordFile">
            <span className="wordText">MsWord</span>
            <a href={mswordFile} download="rajesh'sResume">
              <DescriptionSharp />
            </a>
          </div>

          <div className="pdfFile" onClick={() => window.open(pdfFile)}>
            <span className="pdfText">pdfFile</span>
            <PictureAsPdfTwoTone />
            <i className="mdi mdi-help-circle"></i>
          </div>
        </div>
      </div>
    </center>
  );
}
