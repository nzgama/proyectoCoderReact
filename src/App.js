import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailConteiner />
    </>
  );
};

export default App;
