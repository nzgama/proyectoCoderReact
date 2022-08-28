import ItemCount from "./ItemCount";

const Item = (props) => {
  return (
    <>
      <div className="card shadow-sm border border-dark">
        <h4 className="text-center">{props.title}</h4>
        <img
          src={props.picureURL}
          class="rounded mx-auto d-block border border-dark"
          alt="..."
        ></img>
        <div className="card-body">
          <p className="card-text">Precio ${props.price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <ItemCount stock={props.stock} />
            </div>
            <small className="text-muted">Stock {props.stock}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
