import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function InputProduct() {
  const [prouduct, setprouduct] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(prouduct);
    return <li>{prouduct}</li>
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
