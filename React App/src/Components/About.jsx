function About() {
  return (
    <section className="about-section">

      <div className="about-content">

        <span className="about-tag">WHO WE ARE</span>

        <h1>
          Welcome To <span>Shop Pro</span>
        </h1>

        <p>
          Shop Pro is your trusted online shopping destination.
          We bring you a wide collection of quality products at
          amazing prices. Our goal is to make your shopping
          experience simple, convenient and enjoyable.
        </p>

        <div className="about-features">

          <div className="about-card">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Easy Shopping</h3>
            <p>Find your favourite products with ease.</p>
          </div>

          <div className="about-card">
            <i className="fa-solid fa-tags"></i>
            <h3>Best Prices</h3>
            <p>Discover amazing products at great prices.</p>
          </div>

          <div className="about-card">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Enjoy a smooth and convenient delivery experience.</p>
          </div>

        </div>

        <div className="about-bottom">
          <i className="fa-solid fa-heart"></i>
          <p>Making Online Shopping Better For Everyone.</p>
        </div>

      </div>

    </section>
  );
}

export default About;