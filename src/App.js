import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
// import Basket from "./components/Basket";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="productContainer">
        <div className="productBoxs">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
