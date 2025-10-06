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
          Computer Science graduate from HIT with Dean's List honors (GPA: 92). 
          <br />Experienced Software Developer specializing in full-stack development, authentication systems, and scalable applications.
          <br />Currently tutoring algorithms and mentoring students while building innovative software solutions.
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <a href="/resume.pdf" download="resume.pdf">
            <button className="btn btn-primary res-but" style={{ marginTop: '30px' }}>Resume</button>
          </a>
          <a href="https://www.linkedin.com/in/afek-david-221175218/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-success res-but" style={{ marginTop: '30px',marginLeft: '30px' }}>LinkedIn</button>
          </a>
          <a href="https://github.com/AfekDa" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-github res-but" style={{ marginTop: '30px',marginLeft: '30px' }}>GitHub</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img 
          src="./img/0_JVek3Y52-UUSyEdD.jpg" 
          alt="Afek David - Software Developer" 
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
