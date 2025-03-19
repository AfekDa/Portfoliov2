import "./AboutMe.css";
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  return (
    <>
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me.jpeg" alt="About Me" />
        </div>
        <Fade bottom>
          <div className="hero--section--content--box about--section--box">
            <div className="hero--section--content">
              <h1 className="skills-section--heading">About Me</h1>
              <p className="hero--section-description">
                Hello! I'm Afek David, a Computer Science student at the HIT with Dean's list honor. I'm passionate about software development and have been recognized on the Dean's List for my academic achievements.
                My technical skills include Python, C, JavaScript, C#, SQL, React, Node.js, and more.
              </p>
              <p className="hero--section-description">
                I have experience working as a React Developer, where I developed and implemented key features using React, CSS, and HTML. I also handled bug fixes and integrated third-party APIs to enhance user interactions and functionality.
              </p>
              <p className="hero--section-description">
                Additionally, I worked as a Community Manager for a Gaming Channel, where I grew community engagement through targeted social media strategies and utilized social media analytics tools to optimize content strategies.
              </p>
              <p className="hero--section-description">
                I'm eager to bring my skills and creativity to a role in a dynamic, innovative environment that values continuous learning and growth. Feel free to reach out if you'd like to connect!
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}
