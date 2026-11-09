import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Checkout from "./Checkout";
import Footer from "./Footer";

function Products() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  // Get All Products
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Background Scroll
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

  // Search, Filter and Sort
  let filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || product.category === category;

    const matchMin =
      minPrice === "" || product.price >= Number(minPrice);

    const matchMax =
      maxPrice === "" || product.price <= Number(maxPrice);

    return matchSearch && matchCategory && matchMin && matchMax;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Open Product Popup
  const openPopup = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  // Close Popup
  const closePopup = () => {
    setSelectedProduct(null);
    setShowCheckout(false);
  };

  return (
    <>
      <Navbar />

      <div className="all-products">

        <h1>All Products</h1>
        <p>Explore our complete collection</p>

        {/* Search and Filters */}
        <div className="products-filters">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

        </div>

        {/* Product Cards */}
        <div className="sale-cards">

          {filteredProducts.map((card) => (
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

        {filteredProducts.length === 0 && (
          <h2 className="no-products">No Products Found</h2>
        )}

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

              <div className="modal-heading">
                <h4>Image</h4>
                <h4>Product Title</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total Price</h4>
                <h4>Action</h4>
              </div>

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
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                />

                <div className="modal-total">
                  ${(selectedProduct.price * quantity).toFixed(2)}
                </div>

                <button
                  className="cart-button"
                  onClick={() => setShowCheckout(true)}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  Add To Cart
                </button>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Popup */}
      {showCheckout && (
        <Checkout onClose={closePopup} />
      )}
      <Footer/>
    </>
  );
}

export default Products;