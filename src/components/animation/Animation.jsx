import React, { useEffect, useState, useMemo } from "react";
import "./animation.css";
//import { Waypoint } from "react-waypoint";

const SkillsComponent = () => {
  const [progress, setProgress] = useState({});

  const skills = useMemo(
    () => [
      { name: "HTML", level: 97 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind", level: 80 },
      { name: "react", level: 85 },
      { name: "nextJs", level: 90 },
      // Add more skills here
    ],
    []
  );
  useEffect(() => {
    const calculateProgress = () => {
      const updatedProgress = {};
      skills.forEach((skill) => {
        updatedProgress[skill.name] = skill.level;
      });
      setProgress(updatedProgress);
    };

    calculateProgress();
  }, [skills]);

  useEffect(() => {
    const progressBarObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When progress bar comes into view, animate its width to the percentage level
            entry.target.querySelector(".progress-bar-inner").style.width = `${
              progress[entry.target.id]
            }%`;
          }
        });
      },
      {
        threshold: 0.1, // Intersection threshold for triggering the animation
      }
    );

    const skillBars = document.querySelectorAll(".skill");

    skillBars.forEach((skillBar) => {
      progressBarObserver.observe(skillBar);
    });

    return () => progressBarObserver.disconnect();
  }, [progress]);

  return (
    <div className="skill-container">
      <h4>Development Skills</h4>
      <div className="skills-container">
        {Object.keys(progress).map((skillName) => (
          <div className="skill" id={skillName} key={skillName}>
            <div className="skill-name">{skillName}</div>
            <div className="progress-bar">
              <div className="progress-bar-inner">{progress[skillName]}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
