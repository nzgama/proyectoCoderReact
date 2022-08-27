import { useState } from "react";

const ItemCount = (props) => {
  const [ProductCount, setProductCount] = useState(0);

  const itemPlus = () => {
    ProductCount < props.stock && setProductCount(ProductCount + 1);
  };

  const itemMinus = () => {
    ProductCount > 0 && setProductCount(ProductCount - 1);
  };

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={itemMinus}
        >
          <i class="bi bi-dash-circle-fill"></i>
        </button>
        <input type="number" value={ProductCount} />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={itemPlus}
        >
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-primary">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
