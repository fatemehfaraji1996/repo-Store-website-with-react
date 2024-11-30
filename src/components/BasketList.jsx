import React from "react";
import { useSelector } from "react-redux";
import BasketShow from "./BasketShow";

export default function BasketList() {
  const basketProduct = useSelector((state) => state.basket);
  return (
    <div>
        <hr></hr>
        <p className="">BasketList</p>
      <ul>
        {basketProduct.map((item, i) => {
        //   return <li key={i}>{item.name + item.quantity}</li>;
          return <BasketShow key={i} product={item} />

        })}
      </ul>
    </div>
  );
}
