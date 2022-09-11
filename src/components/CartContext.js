import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [CartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let itemForCart = { ...item, qty };

    CartList.map(
      (item) => item.id === itemForCart.id && (itemForCart.qty += item.qty)
    );

    let newCartList = CartList.filter((item) => item.id !== itemForCart.id);

    setCartList([...newCartList, itemForCart]);
  };

  const removeItem = (id) => {
    let newCartList = CartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ CartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
