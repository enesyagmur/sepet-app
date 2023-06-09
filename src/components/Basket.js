import React from "react";

export default function Basket({ basket, setBasket, total, setTotal }) {
  return (
    <div className="mainBasket">
      <div className="showBasket">
        <h2>Basket</h2>
        <h3 className="price">{total}$</h3>
        {basket.map((product) => (
          <div className="basketList">
            <p>{product.name}</p>
            <p>{product.price}$</p>

            <img width={80} src={product.img} alt="" />
            <b
              onClick={() => {
                setBasket([...basket.filter((item) => item.id !== product.id)]);
                // basketin içeriğini çarpıya tıkladığımız ürün dışındakiler olarak güncelliyoruz ve o sepetten silinmiş oluyor

                let result = total - product.price;
                setTotal(result);
                // sepet toplam fiyatı düşürerek güncelliyoruz
              }}
            >
              X
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}
