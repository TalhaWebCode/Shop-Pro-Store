import { useEffect } from "react";

function Checkout({ onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="checkout-overlay">
      <div className="checkout-box">
        <i className="fa-solid fa-circle-check"></i>

        <h2>Checkout Completed</h2>
      </div>
    </div>
  );
}

export default Checkout;