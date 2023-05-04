import React from "react";

export default function Basket({ basket, setBasket }) {
  return (
    <div className="mainBasket">
      <div className="showBasket">
        <h2>Basket</h2>
        {basket.map((product) => (
          <div className="basketList">
            <p>{product.name}</p>
            <p>{product.price}$</p>

            <img width={80} src={product.img} alt="" />
            <b
              onClick={() => {
                setBasket([...basket.filter((item) => item.id !== product.id)]);
              }}
            >
              X
            </b>
          </div>
        ))}
        <h5>Toplam</h5>
      </div>
    </div>
  );
}
