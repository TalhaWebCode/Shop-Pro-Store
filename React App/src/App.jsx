import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Category from "./Components/Category";
import About from "./Components/About";
import Products from "./Components/Product";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";

function Home() {
  const images = [image2, image3, image1];

  const [index, setindex] = useState(0);
  const [salesCard, setSalesCard] = useState([]);

  const navigate = useNavigate();

  const prev = () => {
    setindex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setindex((index + 1) % images.length);
  };

  const getProductsData = async () => {
    let promise = await fetch("https://fakestoreapi.com/products");
    let data = await promise.json();

    setSalesCard(data.slice(11, 16));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <div id="home">
        <Navbar />

        <div
          key={index}
          className="slider"
          style={{ backgroundImage: `url(${images[index]})` }}
        >
          <div className="left-right">
            <i onClick={prev} className="fa-solid fa-chevron-left"></i>

            <div className="heroic-text">
              <h1>Best Fashion</h1>
              <h1>Best Price</h1>
              <p>Shop Smart, Live Better.</p>

              <button>
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <i onClick={next} className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        {/* Best Sales */}
        <div className="cateogries">
          <div className="hdbtn">
            <h1>Best Sales</h1>
            <a href="/products">View All</a>
          </div>

          <div className="sale-cards">
            {salesCard.map((card) => (
              <div key={card.id} className="cards">
                <img src={card.image} alt={card.title} />

                <h3>{card.category}</h3>
                <p>${card.price}</p>
                <p>Rating: {card.rating.rate}</p>

                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>

                <div>
                  <button onClick={() => navigate(`/product/${card.id}`)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div className="category-section">
            <div className="category-heading">
              <h1>Shop By Category</h1>
              <p>Explore our product categories</p>
            </div>

            <div className="category-cards">
              <div
                className="category-card"
                onClick={() => navigate("/category/electronics")}
              >
                <i className="fa-solid fa-laptop"></i>
                <h3>Electronics</h3>
                <p>Explore Electronics</p>
              </div>

              <div
                className="category-card"
                onClick={() => navigate("/category/jewelery")}
              >
                <i className="fa-solid fa-gem"></i>
                <h3>Jewelery</h3>
                <p>Explore Jewelery</p>
              </div>

              <div
                className="category-card"
                onClick={() => navigate("/category/men's clothing")}
              >
                <i className="fa-solid fa-shirt"></i>
                <h3>Men's Clothing</h3>
                <p>Explore Men's Fashion</p>
              </div>

              <div
                className="category-card"
                onClick={() => navigate("/category/women's clothing")}
              >
                <i className="fa-solid fa-person-dress"></i>
                <h3>Women's Clothing</h3>
                <p>Explore Women's Fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;