import { useState } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const [CartCount, setCartCount] = useState(4); //hook

  return (
    <>
      <div className="p-2 bg-light">
        <Link to="/cart">
          <button type="button" className="btn btn-outline-dark">
            <i className="bi bi-cart3"></i>
            <span className="badge text-bg-secondary">{CartCount}</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
