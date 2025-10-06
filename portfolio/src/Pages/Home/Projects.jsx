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
      title: "One-Time Password Service",
      description: "Developed a secure OTP service with email verification, featuring dynamic 6-digit OTP generation using weather data from three random cities. Includes SQL-based email validation and enhanced authentication security.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "Nodemailer"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Built a comprehensive weather application displaying real-time weather information based on user location or city search. Features location-based data retrieval and intuitive user interface.",
      technologies: ["React", "FastAPI", "RESTful API", "SQL", "Docker", "JavaScript", "CSS"],
      link: "https://github.com/AfekDa/weather-dashboard"
    },
    {
      title: "Ozzystory Platform",
      description: "Full-stack development including Firebase authentication, Paddle Billing integration, interactive canvas tooling with Konva, and comprehensive admin panel for subscription management.",
      technologies: ["React", "Firebase", "Konva", "FastAPI", "Paddle Billing", "TypeScript"],
      link: null
    },
    {
      title: "Unity Lazer Defender",
      description: "Developed a 2D space shooter game with Unity C#, featuring engaging gameplay mechanics and polished user experience.",
      technologies: ["Unity", "C#", "Game Development"],
      link: "https://github.com/AfekDa/Unity-Lazer-defender"
    }
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
                  <div className="project--technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech--tag">{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="btn btn-primary project--link">View Project →</a>
                  )}
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
