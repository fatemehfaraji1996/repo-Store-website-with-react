import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, increaseBasket } from "../redux/basketSlice";

export default function PruductShow({ prouduct, id }) {
  const dispatch = useDispatch();
const BasketProduct = useSelector((state)=>state.basket)
  // function handelClick() {
  //   dispatch(addBasket({ id, name: prouduct, quantity: 1 }));
  // }
   function handelClick() {
    const ProductExistxist=BasketProduct.find((prouduct)=>{
      return prouduct.id === id
    })
    if(!ProductExistxist){

      dispatch(addBasket({ id, name: prouduct, quantity: 1 }));
    }else{
      dispatch(increaseBasket({id}))
    }
  }

  return (
    <li  key={id}>
      <p onClick={handelClick} > + {prouduct}</p>
      
    </li>
  );
}
