import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/basketSlice";

export default function PruductShow({ prouduct, id }) {
  const dispatch = useDispatch();

  function handelClick() {
    dispatch(addProduct({ id, name: prouduct, quantity: 1 }));
  }

  return (
    <li onClick={handelClick} key={id}>
      {prouduct}
    </li>
  );
}
