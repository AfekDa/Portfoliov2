import "./Skills.css";
import Zoom from "react-reveal/Zoom";

export default function Skills() {
  const skillsList = [
    "Python",
    "C",
    "JavaScript",
    "C#",
    "SQL",
    "React",
    "Node.js",
    "C++",
    "Java",
    "RESTful API",
    "FastAPI",
    "CSS",
    "HTML",
    "Git",
    "Jira",
    "Docker",
    "MongoDB",
    // Add more skills as needed
  ];

  return (
    <section id="Skills" className="skills--section">
      <div className="skills--section--content">
        <h1 className="skills-section--heading">My Skills</h1>
        <ul className="skills--list">
          {skillsList.map((skill, index) => (
            <Zoom key={index}>
              <li className="skill--item">{skill}</li>
            </Zoom>
          ))}
        </ul>
      </div>
    </section>
  );
}
