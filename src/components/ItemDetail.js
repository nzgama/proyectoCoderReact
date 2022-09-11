import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = (props) => {
  const [AddToCart, setAddToCart] = useState(false);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setAddToCart(true);
    test.addItem(props.product, qty);
  };

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">{props.product.title}</h1>
        <img
          src={props.product.picureURL}
          className="rounded mx-auto d-block border border-dark"
          alt="..."
        ></img>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{props.product.descripcion}</p>
          <p className="card-text">Precio $ {props.product.price}</p>
          <small className="text-muted">
            Stock disponible {props.product.stock}
          </small>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {AddToCart ? (
              <div className="text-end">
                <Link to="/cart">
                  <button type="button" className="btn btn-outline-dark">
                    Ir al carrito
                  </button>
                </Link>
                <Link to="/">
                  <button type="button" className="btn btn-outline-dark">
                    Seguir comprando
                  </button>
                </Link>
              </div>
            ) : (
              <ItemCount stock={props.product.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
