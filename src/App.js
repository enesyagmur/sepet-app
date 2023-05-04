import "./App.css";
import products from "./products.json";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    console.log(basket);
  }, [basket]);
  // bu kodun kullanım amacı basket te değişiklik olduğunda console yazdırması için
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
            />
          ))}
        </div>
      </div>
      <Basket basket={basket} />
    </div>
  );
}

export default App;

// 11. dakikadayım
