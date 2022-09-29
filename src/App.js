import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";

const App = () => {
  return (
    <div className="page-container">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailConteiner />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/contactanos" element={<Contactanos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;
