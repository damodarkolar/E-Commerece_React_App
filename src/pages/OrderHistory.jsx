import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { OrderItemCard } from '../components/OrderItemCard'

export const OrderHistory = () => {

  const {token}=useSelector(state=> state.Auth)
  const {orderHistory} =useSelector(state=>state.Cart)
const navigate=useNavigate();


if(!token){
  navigate("/")
}
  console.log(orderHistory)
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      {[...orderHistory].map(ele=><OrderItemCard order={ele}/> )}
    </div>
  )
}
