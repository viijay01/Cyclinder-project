import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/myzpowqb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1 className="logo">Cylinder Co.</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section hero">
        <h2>Welcome to Cylinder Co.</h2>
        <p>Fast & Safe Gas Cylinder Delivery at Your Doorstep</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We are committed to delivering gas cylinders quickly and safely to
          your home, ensuring convenience and reliability every time.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Home Delivery of Gas Cylinders</li>
          <li>24/7 Emergency Service</li>
          <li>Bulk Supply for Restaurants & Businesses</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Cylinder Co. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
