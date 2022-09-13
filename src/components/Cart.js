import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const test = useContext(CartContext);

  const remove = (id) => {
    test.removeItem(id);
  };

  return (
    <ul className="list-group">
      {test.CartList.map((item) => (
        <li key={item.id} className="list-group-item">
          <CartItem
            id={item.id}
            title={item.title}
            picureURL={item.picureURL}
            price={item.price}
            qty={item.qty}
            remove={remove}
          />
        </li>
      ))}
      <li>
        {test.totalCart() > 0 && (
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h3>Total: {test.totalCart()} </h3>
            </div>

            <div className="col">
              <button type="button" className="btn btn-primary btn-lg m-2">
                Finalizar compra
              </button>
              <button
                onClick={test.clear}
                type="button"
                className="btn btn-danger btn-lg m-2"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};
export default Cart;
