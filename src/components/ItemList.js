import Item from "./Item";
import { useEffect, useState } from "react";
// import GetProducts from "../utils/GetProducts";
// import { data } from "../utils/data";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { firesoteFetchGetProducts } from "../utils/firebaseConfig";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // GetProducts(data.filter((item) => item.categori_id === parseInt(id)))
      //   .then((result) => setProducts(result))
      //   .catch((error) => console.log(error));

      firesoteFetchGetProducts(id)
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));
    } else {
      // GetProducts(data)
      //   .then((result) => setProducts(result))
      //   .catch((error) => console.log(error));
      firesoteFetchGetProducts()
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      {products.length === 0 ? (
        <div className="container text-center">
          <Spinner />
        </div>
      ) : (
        products.map((item) => (
          <div key={item.id} className="col">
            <Item
              id={item.id}
              title={item.title}
              picureURL={item.picureURL}
              price={item.price}
              stock={item.stock}
            />
          </div>
        ))
      )}
    </>
  );
};

export default ItemList;
