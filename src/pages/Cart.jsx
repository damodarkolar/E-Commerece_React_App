import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CheckOutButton, ClearCartButton } from '../components/CartButtons'
import { CartCard } from '../components/CartCard'

export const Cart = () => {
  const {cart, getCartLoading, getCartErr}=useSelector(state=> state.Cart)
  const navigate=useNavigate();
const {token}=useSelector(state=> state.Auth)
 

React.useEffect(() => {
  if(!token){
  navigate("/")
}
}, [])


let total=0
let itemsCount=0
  return !!getCartLoading ? (<h1>Cart is Loading</h1>): !!getCartErr?(<h1>Something wrong.. </h1>):!!cart.length?(
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      {
        [...cart]?.map(ele=><CartCard key={ele.id} item={ele}/>)
      }
    </div>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
    <div className='cartCard'><h4>Total No of products {cart.length}</h4><h4>Total number of Items ={[...cart]?.map(ele=>{ itemsCount+=ele.count}) }{itemsCount}</h4><h4>Total ={[...cart]?.map(ele=>{ total+=(ele.price*ele.count)}) }{total}/-</h4></div>
    <div className='cartCard' style={{border:"0px solid white"}}>
      <ClearCartButton/><CheckOutButton/>
    </div>
    </div>
    </>
  ):(<>
  <h1>Cart is Empty!</h1><br/>
  <Button onClick={()=>navigate("/")}></Button>
  </>)
}
