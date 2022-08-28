import { useState } from "react";

const CartWidget = () => {
  const [CartCount, setCartCount] = useState(4); //hook

  return (
    <>
      <div className="p-2 bg-light">
        <button type="button" className="btn btn-outline-dark">
          <i className="bi bi-cart3"></i>
          <span className="badge text-bg-secondary">{CartCount}</span>
        </button>
      </div>
    </>
  );
};

export default CartWidget;
