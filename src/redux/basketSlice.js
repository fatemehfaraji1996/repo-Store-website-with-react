import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
    name:'basket',
    initialState:[],
    reducers:{
create:(state,action)=>{
    state.push(action.payload)
}
    }
})
// export default basketSlice.actions.create
export const {addProduct}= basketSlice.actions
export default basketSlice.reducer