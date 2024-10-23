import { configureStore } from "@reduxjs/toolkit";
import prouductSlice from "./productSlice"
const store = configureStore({
    reducer:{
        prouduct:prouductSlice
    }
})
export {store}