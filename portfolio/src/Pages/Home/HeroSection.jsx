export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Afek</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Passionate about building scalable software solutions and exploring new technologies.
          <br /> Skilled in C, Python, and JavaScript. Eager to solve challenging problems and deliver high-quality software.
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <a href="/resume.pdf" download="resume.pdf">
            <button className="btn btn-primary res-but" style={{ marginTop: '30px' }}>Resume</button>
          </a>
          <a href="https://www.linkedin.com/in/afek-david-221175218/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success res-but" style={{ marginTop: '30px',marginLeft: '30px' }}>Linkedin</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/0_JVek3Y52-UUSyEdD.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
