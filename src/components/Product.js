import React from "react";

export default function Product({ product, basket, setBasket }) {
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
  };

  const removeFromBasket = () => {
    const removeFind = basket.filter((item) => item.id === product.id);

    if (removeFind) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    }
  };

  return (
    <div className="product">
      <img src={product.img} alt="" />
      <div className="productsInfo">
        <p>{product.name}</p>
        <p>{product.price}$</p>
      </div>
      <div className="countProduct">
        <button onClick={removeFromBasket}>-</button>
        <b>|</b>
        <button onClick={addToBasket}>+</button>
      </div>
    </div>
  );
}
