import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la Tienda de Cereales" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tienda de Cereales</h1>
      </header>
    </div>
  );
}

export default App;
