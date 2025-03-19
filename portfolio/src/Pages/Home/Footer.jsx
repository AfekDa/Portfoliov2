import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer--section">
      <div className="footer--content">
        <p>&copy; Afek David. All rights reserved.</p>
        <div className="footer--links">
          <a href="https://www.linkedin.com/in/afek-david" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AfekDa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:afek.david@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
