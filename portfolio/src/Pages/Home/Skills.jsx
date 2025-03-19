import "./Skills.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
    <section id="Skills" className="skills--section" ref={ref}>
      <div className="skills--section--content">
        <h1 className="skills-section--heading">My Skills</h1>
        <ul className="skills--list">
          {skillsList.map((skill, index) => (
            <motion.li
              key={index}
              className="skill--item"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0.5 }
              }}
              transition={{ duration: 0.8 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
