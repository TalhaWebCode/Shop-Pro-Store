
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">

      <div className="logo">
        <i className="fa-solid fa-shopping-cart"></i>
        <h1>Shop Pro</h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      {/* Menu */}
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="#" onClick={closeMenu}>Cart</Link></li>
        </ul>
      </div>

      <div className="icons">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-shopping-cart"></i>
      </div>

    </div>
  );
};

export default Navbar;
