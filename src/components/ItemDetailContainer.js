import ItemDetail from "./ItemDetail";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import GetProduct from "../utils/GetProduct";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { firesoteFetchGetProduct } from "../utils/firebaseConfig";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // GetProduct(data.find((item) => item.id === parseInt(id)))
    //   .then((result) => setProduct(result))
    //   .catch((error) => console.log(error));
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
