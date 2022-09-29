const CartItem = (props) => {
  return (
    <div className="row">
      <div className="col">
        <div>
          <img
            src={props.picureURL}
            style={{ height: "100px" }}
            alt="..."
          ></img>
        </div>
      </div>

      <div className="col">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <h3> {props.title}</h3>
          </div>
          <div>
            <p>
              {props.price} x {props.qty} Total: {props.price * props.qty}
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="ms-2 me-auto mt-2">
          <div className="fw-bold">
            <button
              onClick={() => props.remove(props.id)}
              type="button"
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
