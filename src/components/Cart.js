import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import {
  collection,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "../utils/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    let itemsForDB = test.CartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
    }));

    let order = {
      buyer: {
        name: "Tony Stark",
        email: "tonystark@starkindustries.com",
        phone: "212-970-4133",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: test.totalCart(),
    };

    const createOredByFiresotr = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOredByFiresotr()
      .then((result) => {
        alert(`You order has been created ${result.id}`);
        test.CartList.forEach(async (element) => {
          const elementRef = doc(db, "products", element.id);

          await updateDoc(elementRef, {
            stock: increment(-element.qty),
          });
        });
        test.clear();
      })
      .catch((error) => console.log(error));
  };

  const remove = (id) => {
    test.removeItem(id);
  };

  return (
    <ul className="list-group">
      {test.CartList.map((item) => (
        <li key={item.id} className="list-group-item">
          <CartItem
            id={item.id}
            title={item.title}
            picureURL={item.picureURL}
            price={item.price}
            qty={item.qty}
            remove={remove}
          />
        </li>
      ))}
      <li>
        {test.totalCart() > 0 && (
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <h3>Total: {test.totalCart()} </h3>
            </div>

            <div className="col">
              <button
                onClick={createOrder}
                type="button"
                className="btn btn-primary btn-lg m-2"
              >
                Finalizar compra
              </button>
              <button
                onClick={test.clear}
                type="button"
                className="btn btn-danger btn-lg m-2"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};
export default Cart;
