import ItemDetail from "./ItemDetail";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import GetProduct from "../utils/GetProduct";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetProduct(data.find((item) => item.id === parseInt(id)))
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailConteiner;
