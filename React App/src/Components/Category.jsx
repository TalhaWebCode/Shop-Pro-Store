import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Checkout from "./Checkout";
import Footer from "./Footer";

function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const getCategoryProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
    );

    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    setProducts([]);
    getCategoryProducts();
  }, [category]);

  // Background scroll control
  useEffect(() => {
    if (selectedProduct || showCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct, showCheckout]);

  // Open product popup
  const openPopup = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  // Close product popup
  const closePopup = () => {
    setSelectedProduct(null);
    setShowCheckout(false);
  };

  // Add to cart
  const addToCart = () => {
    setShowCheckout(true);
  };

  if (products.length === 0) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="category-products">
        <h1>{category}</h1>

        <div className="sale-cards">
          {products.map((card) => (
            <div
              className="cards"
              key={card.id}
              onClick={() => openPopup(card)}
            >
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>${card.price}</p>
              <p>Rating: {card.rating.rate}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Popup */}
      {selectedProduct && !showCheckout && (
        <div
          className="product-modal-overlay"
          onClick={closePopup}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closePopup}>
              &times;
            </button>

            <div className="modal-row">

              {/* Headings */}
              <div className="modal-heading">
                <h4>Image</h4>
                <h4>Product Title</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total Price</h4>
                <h4>Action</h4>
              </div>

              {/* Product Data */}
              <div className="modal-data">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                />

                <h3>{selectedProduct.title}</h3>

                <div className="modal-price">
                  ${selectedProduct.price.toFixed(2)}
                </div>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.max(1, Number(e.target.value))
                    )
                  }
                />

                <div className="modal-total">
                  ${(selectedProduct.price * quantity).toFixed(2)}
                </div>

                <button
                  className="cart-button"
                  onClick={addToCart}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  Add To Cart
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Completed Popup */}
      {showCheckout && (
        <Checkout onClose={closePopup} />
      )}

      <Footer/>
    </>
  );
}

export default Category;