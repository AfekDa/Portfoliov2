import "./AboutMe.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <section id="AboutMe" className="about--section" ref={ref}>
        <div className="about--section--img">
          <img 
            src="./img/about-me.jpeg" 
            alt="Afek David - About Me" 
            loading="lazy"
            decoding="async"
          />
        </div>
        <motion.div
          className="hero--section--content--box about--section--box"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }}
          transition={{ duration: 1.5 }}
        >
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              Hello! I'm Afek David, a Computer Science graduate from the Holon Institute of Technology (HIT) with Dean's List honors (GPA: 92). 
              I'm passionate about building scalable software solutions and have extensive experience in full-stack development.
            </p>
            <p className="hero--section-description">
              Currently, I work as a Tutor at Dr-logy, mentoring students in algorithms, data structures, Python, and C programming. 
              I guide students in developing strong problem-solving skills and solid programming foundations.
            </p>
            <p className="hero--section-description">
              Previously, I worked as a Software Developer at Ozzystory, where I implemented end-to-end authentication with Firebase, 
              integrated Paddle Billing for subscription management, and built interactive canvas tooling with Konva. 
              I designed REST/FastAPI endpoints with server-side validation and automated testing workflows.
            </p>
            <p className="hero--section-description">
              My technical expertise spans Python, C, JavaScript, TypeScript, React, Node.js, FastAPI, PostgreSQL, MongoDB, 
              Firebase, Docker, and cloud technologies. I'm passionate about creating innovative solutions and mentoring others in technology.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
