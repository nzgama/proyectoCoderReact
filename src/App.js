import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer hola="Hello word !!!" />
    </>
  );
};

export default App;
