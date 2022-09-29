import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Item = (props) => {
  const [AddToCart, setAddToCart] = useState(false);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setAddToCart(true);
    test.addItem(props, qty);
  };

  return (
    <>
      <div className="card shadow-sm border border-dark">
        <h4 className="text-center">{props.title}</h4>
        <Link to={`/item/${props.id}`}>
          <img
            width="300"
            height="300"
            src={props.picureURL}
            className="rounded mx-auto d-block border border-dark"
            alt="..."
          ></img>
        </Link>
        <div className="card-body">
          {props.stock > 0 ? (
            <p className="card-text">Precio ${props.price}</p>
          ) : (
            <p className="card-text">Producto agotado</p>
          )}

          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {AddToCart ? (
                <div className="text-end">
                  <Link to="/cart">
                    <button type="button" className="btn btn-outline-dark">
                      Ir al carrito
                    </button>
                  </Link>
                </div>
              ) : props.stock > 0 ? (
                <ItemCount stock={props.stock} onAdd={onAdd} />
              ) : (
                <p>Sin Stock</p>
              )}
            </div>
            {props.stock > 0 && (
              <small className="text-muted">Stock {props.stock}</small>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
