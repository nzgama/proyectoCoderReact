import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <h1>{props.hola}</h1>
      <ItemCount stock="20" />
    </>
  );
};

export default ItemListContainer;
