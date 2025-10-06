import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ContactMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <>
      <section id="Contact" className="contact--section" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.8 }}
        >
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Ready to collaborate or have questions about my work? Let's connect!
          </p>
        </motion.div>
        <motion.form 
          className="contact--form--container"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          
          {formStatus === "success" && (
            <div style={{ 
              padding: "16px", 
              backgroundColor: "#dcfce7", 
              color: "#166534", 
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500"
            }}>
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {formStatus === "error" && (
            <div style={{ 
              padding: "16px", 
              backgroundColor: "#fee2e2", 
              color: "#991b1b", 
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "500"
            }}>
              ✗ Oops! Something went wrong. Please try again.
            </div>
          )}
          
          <div>
            <button type="submit" className="btn btn-primary contact--form--btn">
              {formStatus === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </motion.form>
      </section>
      <Footer />
    </>
  );
}
