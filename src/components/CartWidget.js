import ItemListContainer from "./ItemListContainer";

const CartWidget = () => {
  return (
    <>
      <div className="p-2 bg-light">
        <button type="button" className="btn btn-outline-dark">
          <i className="bi bi-cart3"></i>
          <ItemListContainer itemCounter="4" />
        </button>
      </div>
    </>
  );
};

export default CartWidget;
