import React from "react";
import { useSelector } from "react-redux";
import {v4 as uuid} from 'uuid'
import PruductShow from "./PruductShow";
export default function ProductList() {
  const prouduct = useSelector((state) => state.prouduct);
  return (
    <ul className="">
      {prouduct.map((x) => {
       const id= uuid()
        return <PruductShow prouduct={x} key={id} id={id}/>
      })}
    </ul>
  );
}
