import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
    name:'basket',
    initialState:[],
    reducers:{
addBasket:(state,action)=>{
    state.push(action.payload)
},
increaseBasket:(state,action)=>{
state.map((product)=>{
    if(product.id===action.payload.id){
        return {...product,quantity:product.quantity++}
    }
    return product
})
},
decreaseBasket:(state,action)=>{
    state.map((product)=>{
        if(product.id===action.payload.id){
            return {...product,quantity:product.quantity--}
        }
        return product
    })
},
removeBasket:(state,action)=>{
    return state.filter((item)=>item.id !== action.payload.id)
}
    }
})
// export default basketSlice.actions.create
export const {addBasket,increaseBasket,decreaseBasket ,removeBasket}= basketSlice.actions
export default basketSlice.reducer