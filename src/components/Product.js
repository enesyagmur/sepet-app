import React from "react";

export default function Product({
  product,
  basket,
  setBasket,
  setTotal,
  total,
}) {
  const addToBasket = () => {
    setBasket([
      ...basket,
      {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
      },
    ]);
    let result = total;
    result += product.price;
    setTotal(result);
  };

  return (
    <div className="product">
      <img src={product.img} alt="" />

      <div className="productsInfo">
        <p>{product.name}</p>
      </div>
      <div className="countProduct">
        <button onClick={addToBasket}>{product.price}$</button>
      </div>
    </div>
  );
}
