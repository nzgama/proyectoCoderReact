import ItemDetail from "./ItemDetail";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import GetProduct from "../utils/GetProduct";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    GetProduct(data[8])
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailConteiner;
