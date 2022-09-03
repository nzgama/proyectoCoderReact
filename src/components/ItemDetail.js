import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <>
      {console.log(props.product)}
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
            <ItemCount stock={props.product.stock} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
