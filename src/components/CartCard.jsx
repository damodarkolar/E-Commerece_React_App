import { Button } from '@mui/material'
import React from 'react'
import { DecrementButton, IncrementButton, RemoveFromCartButton } from './CartButtons'

export const CartCard = (props) => {
   const item=props.item
   const {id,title, price, count}=item
  return (
    <div className='cartCard'>
     <h6>{title}</h6>  <h5>₹ {price}/-</h5>
     <p> {<IncrementButton id={id}/>}   <Button variant='outlined'>{count} </Button>  {!!(count-1)&&<DecrementButton id={id}/>}{<RemoveFromCartButton id={id}/>}  </p> 
     <p>Total ₹{count*price}/-</p>
    </div>
  )
}
