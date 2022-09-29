import { useContext, useState } from "react";
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
import { Link } from "react-router-dom";

const Cart = () => {
  const test = useContext(CartContext);
  let [Compra, setCompra] = useState(false);
  let [NumeroOrden, setnumeroOrden] = useState("");

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
        setCompra(true);
        setnumeroOrden(result.id);
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
    <>
      {Compra ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col m-2 ">
              <div className="py-5 text-center">
                <h2>Gracias por tu compra ficticia</h2>
                <p className="lead">
                  Tu numero ficticio se seguimiento es: <b>{NumeroOrden}</b>
                </p>
              </div>
              <hr className="my-4"></hr>
              <Link to="/">
                <button className="w-100 btn btn-primary btn-lg">
                  Seguir comprando
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {test.CartList.length > 0 ? (
            <div className="container-fluid">
              <div className="row">
                <div className="col-8 m-2 border border-primary">
                  {test.CartList.map((item) => (
                    <div key={item.id}>
                      <CartItem
                        id={item.id}
                        title={item.title}
                        picureURL={item.picureURL}
                        price={item.price}
                        qty={item.qty}
                        remove={remove}
                      />
                    </div>
                  ))}
                </div>

                {test.totalCart() > 0 && (
                  <div className="col m-2 border border-primary">
                    <div className="input-group mb-3 mt-1">
                      <span className="input-group-text" id="basic-addon1">
                        Nombre
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div className="input-group mb-3 mt-1">
                      <span className="input-group-text" id="basic-addon1">
                        Apellido
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        aria-label="Apellido"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3 mt-1">
                      <span className="input-group-text" id="basic-addon1">
                        Email
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div className="input-group mb-3 mt-1">
                      <span className="input-group-text" id="basic-addon1">
                        Direccion
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion"
                        aria-label="Direccion"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <h3>Total: {test.totalCart()} </h3>

                    <button
                      onClick={createOrder}
                      type="button"
                      className="btn btn-primary btn-lg m-2"
                    >
                      Compra
                    </button>
                    <button
                      onClick={test.clear}
                      type="button"
                      className="btn btn-danger btn-lg m-2"
                    >
                      Vaciar carrito
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="container-fluid">
              <div className="row">
                <div className="col m-2 ">
                  <div className="py-5 text-center">
                    <h2>Tu carrito se encuentra vacío</h2>
                    <p className="lead">No pierdas tiempo llénalo pronto</p>
                  </div>
                  <hr className="my-4"></hr>
                  <Link to="/">
                    <button className="w-100 btn btn-primary btn-lg">
                      Ir a comprar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Cart;
