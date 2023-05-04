import React from "react";

export default function Basket({ basket }) {
  return (
    <div className="mainBasket">
      <div className="showBasket">
        <h2>Basket</h2>
        {basket.map((item) => (
          <div className="basketList">
            <p>{item.name}</p>
            <p>{item.price}$</p>
            <img width={80} src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
