import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { create } from "../redux/productSlice";

export default function CreateProduct() {
  const [prouduct, setprouduct] = useState();
  const  dispatch= useDispatch()
  console.log(create());
  
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(create(prouduct))


    
  };
  return (

       <form onSubmit={handelSubmit}>
      <TextField
        value={prouduct}
        id="outlined-basic"
        label="inter your product"
        variant="outlined"
        onChange={(e) => setprouduct(e.target.value)}
      />
    </form>
  
   
  );
}
