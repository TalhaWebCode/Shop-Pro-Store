import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [number, setNumber] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  
  const getDetails = async () => {
    let promise = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );

    let data = await promise.json();

    setProduct(data);
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const increasePrice = () => {
    setNumber(number+1)
  }
  const decreasePrice = () => {
    if (number>1) {
      setNumber(number-1)
    }
  }

  useEffect(() => {
  if (showCheckout) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showCheckout]);
  

if (!product) {
  return (
    <div className="loader-container">
      <div className="loader">
      </div>
    </div>
  );
}
const totalPrice = product.price * number;

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="left">
          <img src={product.image} alt="" />
        </div>
        <div className="right">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="branch">{product.category}</p>
          <div className="price">${totalPrice.toFixed(2)}</div>
          <div className="price-detail">
            <i  onClick={decreasePrice}  className="fa-solid fa-minus"></i>
            <span>{number}</span>
            <i  onClick={increasePrice} className="fa-solid fa-plus"></i>
          </div>
          <button onClick={() => setShowCheckout(true)}>Check Out</button>
        </div>
      </div>
      {showCheckout && (<Checkout onClose={() => setShowCheckout(false)} />
)}

<Footer/>
    </>
  );
}

export default Details;