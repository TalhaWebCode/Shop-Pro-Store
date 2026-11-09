function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-box">
          <h2 className="footer-logo">
            Shop<span>Pro</span>
          </h2>
          <p>
            Your trusted online shopping destination.
            Discover quality products at amazing prices.
          </p>

          <div className="footer-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-box">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Info</h3>
          <p><i className="fa-solid fa-envelope"></i> support@shoppro.com</p>
          <p><i className="fa-solid fa-phone"></i> +92 300 1234567</p>
          <p><i className="fa-solid fa-location-dot"></i> Karachi, Pakistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Shop Pro. All Rights Reserved.</p>
        <p>Designed with <i className="fa-solid fa-heart"></i> by Shop Pro</p>
      </div>
    </footer>
  );
}

export default Footer;