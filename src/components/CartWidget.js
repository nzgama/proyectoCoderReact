import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <>
      <div className="p-2 bg-light bg-transparent">
        <Link to="/cart">
          <button type="button" className="btn btn-outline-dark">
            <i className="bi bi-cart3"></i>
            {test.countItems() > 0 && (
              <span className="badge text-bg-secondary">
                {test.countItems()}
              </span>
            )}
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
