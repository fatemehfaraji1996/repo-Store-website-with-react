import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseBasket } from '../redux/basketSlice'

export default function BasketShow({product}) {
   const disPatch= useDispatch()
   const basketProuduct = useSelector((state)=>state.basket)
//    const basketProuductExist=basketProuduct.product
    function handelClick(){
if(product.quantity>1){

    disPatch(decreaseBasket({id:product.id}))
}else{
    disPatch(removeBasket({id:product.id}))
}
    }
  return (
    <li >
{product.name}
<p  onClick={handelClick}> -{product.quantity}</p>
    </li>
  )
}
