import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { firesoteFetchGetProduct } from "../utils/firebaseConfig";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firesoteFetchGetProduct(id)
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {product.length === 0 ? (
        <div className="px-4 py-5 my-5 text-center">
          <Spinner />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailConteiner;
