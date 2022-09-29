import { useState } from "react";

const ItemCount = (props) => {
  const [ProductCount, setProductCount] = useState(1);

  const itemPlus = () => {
    ProductCount < props.stock && setProductCount(ProductCount + 1);
  };

  const itemMinus = () => {
    ProductCount > 1 && setProductCount(ProductCount - 1);
  };

  return (
    <>
      <div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={itemMinus}
          >
            <i className="bi bi-dash-circle-fill"></i>
          </button>
          <div className="container">
            <h5>{ProductCount}</h5>
          </div>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={itemPlus}
          >
            <i className="bi bi-plus-circle-fill"></i>
          </button>
        </div>
      </div>

      <div className="text-end">
        <button
          onClick={() => props.onAdd(ProductCount)}
          type="button"
          className="btn btn-outline-dark"
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
