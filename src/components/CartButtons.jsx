import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartFetching, clearCartFetching, decProductFetching, deleteFromCartFetching, handleCheckOutFetching, incProductFetching } from '../redux/Cart/actions'
import { v4 as uuidv4 } from 'uuid';

export const AddToCartButton = (props) => {
    const dispatch=useDispatch()
const {data}=props
const handleOnclick=()=>{
    dispatch(addToCartFetching({...data,count:1}))
}
  return (
    <Button onClick={handleOnclick} variant='contained'>Add to cart</Button>
  )
}

export const RemoveFromCartButton = (props) => {
    const dispatch=useDispatch()
    const handleOnclick=()=>{
        dispatch(deleteFromCartFetching(props.id))
    }
      return (
        <Button onClick={handleOnclick} variant='contained'>Remove</Button>
      )
}

export const ClearCartButton = () => {
    const dispatch=useDispatch()
    const handleOnclick=()=>{
        dispatch(clearCartFetching())
    }
      return (
        <Button onClick={handleOnclick} variant='contained'>Clear Cart</Button>
      )
}

export const IncrementButton = (props) => {
    const dispatch=useDispatch()
    const handleOnclick=()=>{

        dispatch(incProductFetching(props.id))
    }
      return (
        <Button onClick={handleOnclick} variant='contained' color="success">+</Button>
      )
}

export const DecrementButton = (props) => {
    const dispatch=useDispatch()
    const handleOnclick=()=>{
        dispatch(decProductFetching(props.id))

    }
      return (
        <Button onClick={handleOnclick} variant='contained'color="error" >-</Button>
      )
}

export const CheckOutButton=()=>{
    const cartData=useSelector(state=>state.Cart.cart)
    const dispatch=useDispatch()
    const handleOnclick=()=>{
        const orderedItem={dateTimeStamp:Date.now(),
            items:[...cartData],
        id:uuidv4()}
        dispatch(handleCheckOutFetching(orderedItem))
    }
return (
  <Button onClick={handleOnclick} variant='contained'>Check Out</Button>
)
}

