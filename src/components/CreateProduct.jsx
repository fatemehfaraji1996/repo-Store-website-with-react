import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../redux/productSlice";

export default function CreateProduct() {
  const [prouduct, setprouduct] = useState("");
  const productItemas= useSelector((state) =>state.prouduct) 
  const dispatch = useDispatch();

  // console.log(create());

  const handelSubmit = (e) => {
    e.preventDefault();
    const ProductExist = productItemas.find((item)=>{
     return item.toLowerCase()===prouduct.toLocaleLowerCase()
    })
    if(!ProductExist){
      dispatch(create(prouduct));
      prouduct('')

    }
  };
  return (
    <div className="bg-amber-200 w-auto h-32">

   
    <form onSubmit={handelSubmit} className="bg-orange-200">
      <TextField
      
        value={prouduct}
        id="outlined-basic"
        label="inter your product"
        variant="outlined"
        onChange={(e) => setprouduct(e.target.value)}
      />
     
    </form>
    </div>
  );
}
