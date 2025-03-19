import "./Projects.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Skills from "./Skills";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const projectList = [
    {
      title: "Weather Dashboard",
      description: "A React and FastAPI app to view weather information for multiple cities, with user registration and city subscriptions.",
      link: "https://github.com/AfekDa/weather-dashboard"
    },
    {
      title: "OTP application",
      description: "A React and Node.js app for email OTP verification, using MySQL for data storage and weather data for unique OTP generation.",
      link: "#"
    },
    {
      title: "Lazer Defender Game",
      description: "A 2D space shooter game where players control a spaceship. Developed in Unity C#.",
      link: "https://github.com/AfekDa/Unity-Lazer-defender"
    },
    {
      title: "Cost Management Application",
      description: "An Express.js and Mongoose app providing RESTful web services to manage cost items and user details.",
      link: "https://github.com/AfekDa/Server-nodejs"
    },
    // Add more projects as needed
  ];

  return (
    <>
      <section id="MyPortfolio" className="projects--section" ref={ref}>
        <div className="projects--section--content">
          <h1 className="projects-section--heading">My Projects</h1>
          <div className="projects--grid">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                className="project--card"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 }
                }}
                transition={{ duration: 1.5 }}
              >
                <div className="project--info">
                  <h2 className="project--title">{project.title}</h2>
                  <p className="project--description">{project.description}</p>
                  <a href={project.link} className="project--link">View Project</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
}
