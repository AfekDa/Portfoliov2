import "./Experience.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const experiences = [
    {
      title: "Tutor",
      company: "Dr-logy",
      period: "Dec 2024 – Present",
      description: [
        "Mentored students in algorithms, data structures, Python, and C programming",
        "Guided students in developing strong problem-solving skills and solid programming foundations",
        "Provided personalized learning experiences and technical guidance"
      ]
    },
    {
      title: "Software Developer",
      company: "Ozzystory",
      period: "September 2024 – April 2025",
      description: [
        "Implemented end-to-end authentication with Firebase (tokens, role-based access, secure sessions)",
        "Integrated Paddle Billing (webhooks, proration, seat-based plans) and built Admin Panel for subscription management",
        "Built interactive canvas tooling with Konva (layers, zoom/pan, hit-testing), improving editor performance",
        "Designed and consumed REST/FastAPI endpoints with server-side validation, error handling, and audit logging",
        "Automated testing workflow using Python scripts, enabling repeatable validation and reducing manual QA effort"
      ]
    }
  ];

  return (
    <section id="Experience" className="experience--section" ref={ref}>
      <div className="experience--section--content">
        <h1 className="experience-section--heading">Work Experience</h1>
        <div className="experience--timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience--item"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="experience--header">
                <h3 className="experience--title">{exp.title}</h3>
                <span className="experience--company">{exp.company}</span>
                <span className="experience--period">{exp.period}</span>
              </div>
              <ul className="experience--description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
