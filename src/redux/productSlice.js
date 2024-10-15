import { createSlice } from "@reduxjs/toolkit";
const prouductSlice = createSlice({
    name:'prouduct',
    initialState:['meet','rice'],
    reducers:{
        create:(state,actions)=>{
            state.push(actions.payload)
        }
    }   
})
// console.log(prouductSlice);
export const {create} = prouductSlice.actions
export default prouductSlice.reducer