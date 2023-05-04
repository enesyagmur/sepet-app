import React from "react";

export default function Product(props) {
  return (
    <div className="product">
      <img src={props.product.img} />
      <div className="productsInfo">
        <p>{props.product.name}</p>
        <p>{props.product.price}$</p>
      </div>
      <div className="countProduct">
        <button>-</button>
        <b>0</b>
        <button>+</button>
      </div>
    </div>
  );
}
