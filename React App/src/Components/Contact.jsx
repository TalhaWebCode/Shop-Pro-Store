function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <span>GET IN TOUCH</span>
        <h1>Contact <span>Us</span></h1>
        <p>Have a question? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>Contact us for any questions or support.</p>

          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>support@shoppro.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Address</h3>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;