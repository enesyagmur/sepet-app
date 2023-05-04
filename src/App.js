import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="productContainer">
        <div className="productBoxs">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              basket={basket}
              setBasket={setBasket}
              //sepeti güncelleyebilmek için setBasket i yolluyoruz
              setTotal={setTotal}
              total={total}
            />
          ))}
        </div>
      </div>
      <Basket
        basket={basket}
        setBasket={setBasket}
        total={total}
        setTotal={setTotal}
      />
    </div>
  );
}

export default App;
