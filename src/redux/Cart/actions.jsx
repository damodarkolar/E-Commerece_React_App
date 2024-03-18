import { unstable_useId } from "@mui/material";
import { ADD_TO_CART, ADD_TO_CART_LOADING, ADD_TO_CART_ERR, CLEAR_CART, CLEAR_CART_LOADING, CLEAR_CART_ERR, REMOVE_FROM_CART, REMOVE_FROM_CART_LOADING, REMOVE_FROM_CART_ERR, INC_CART, INC_CART_LOADING, INC_CART_ERR, DEC_CART, DEC_CART_LOADING, DEC_CART_ERR, GET_CART, GET_CART_LOADING, GET_CART_ERR, ADD_ODER_HISTORY, ADD_ODER_HISTORY_LOADING, ADD_ODER_HISTORY_ERR, GET_ODER_HISTORY, GET_ODER_HISTORY_LOADING, GET_ODER_HISTORY_ERR, CHECK_OUT, CHECK_OUT_LOADING, CHECK_OUT_ERR } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const handleAddToCart =() =>{
    return {
        type: ADD_TO_CART
    }
}
export const handleAddToCartLoading =() =>{
    return {
        type: ADD_TO_CART_LOADING
    }
}
export const handleAddToCartErr =() =>{
    return {
        type: ADD_TO_CART_ERR
    }
}

export const handleClearCart =() =>{
    return {
        type: CLEAR_CART
    }
}
export const handleClearCartLoading =() =>{
    return {
        type: CLEAR_CART_LOADING
    }
}
export const handleClearCartErr =() =>{
    return {
        type: CLEAR_CART_ERR
    }
}

export const handleRemoveFromCart =() =>{

    return {
        type: REMOVE_FROM_CART
    }
}
export const handleRemoveFromCartLoading =() =>{

    return {
        type: REMOVE_FROM_CART_LOADING
    }
}
export const handleRemoveFromCartErr =() =>{

    return {
        type: REMOVE_FROM_CART_ERR
    }
}
export const handleInc =() =>{

    return {
        type: INC_CART
    }
}
export const handleIncLoading =() =>{

    return {
        type: INC_CART_LOADING
    }
}
export const handleIncErr =() =>{

    return {
        type: INC_CART_ERR
    }
}
export const handleDec =() =>{

    return {
        type: DEC_CART
    }
}
export const handleDecLoading =() =>{

    return {
        type: DEC_CART_LOADING
    }
}
export const handleDecErr =() =>{

    return {
        type: DEC_CART_ERR
    }
}

export const handleGetCart =(payload) =>{

    return {
        type: GET_CART,
        payload
    }
}
export const handleGetCartLoading =() =>{

    return {
        type: GET_CART_LOADING
    }
}
export const handleGetCartErr =() =>{

    return {
        type: GET_CART_ERR
    }
}
export const handleAddOrderHistory=()=>{
    return{
        type:ADD_ODER_HISTORY
    }
}
export const handleAddOrderHistoryLoading=()=>{
    return{
        type:ADD_ODER_HISTORY_LOADING
    }
}

export const handleAddOrderHistoryErr=()=>{
    return{
        type:ADD_ODER_HISTORY_ERR
    }
}

export const handleGetOrderHistory=(payload)=>{
    return{
        type:GET_ODER_HISTORY,
        payload
    }
}
export const handleGetOrderHistoryLoading=()=>{
    return{
        type:GET_ODER_HISTORY_LOADING
    }
}
export const handleGetOrderHistoryErr=()=>{
    return{
        type:GET_ODER_HISTORY_ERR
    }
}

export const handleCheckOut=()=>{
    return{
        type:CHECK_OUT
    }
}
export const handleCheckOutLoading=()=>{
    return{
        type:CHECK_OUT_LOADING
    }
}
export const handleCheckOutErr=()=>{
    return{
        type:CHECK_OUT_ERR
    }
}




export const cartDataFetching=()=>(dispatch)=>{
    dispatch(handleGetCartLoading())
    fetch(`http://localhost:8080/cartitems`)
    .then(res=>res.json())
    .then(data=>dispatch(handleGetCart(data)))
    .catch(err=>dispatch(handleGetCartErr()))
  }

  export const orderHistoryDataFetching=()=>(dispatch)=>{
    dispatch(handleGetOrderHistoryLoading())
    fetch(`http://localhost:8080/orderHistory`)
    .then(res=>res.json())
    .then(data=>dispatch(handleGetOrderHistory(data)))
    .catch(err=>dispatch(handleGetOrderHistoryErr()))
  }

export const clearCartFetching =()=>(dispatch, state)=>{
    const curCart=state().Cart.cart
    dispatch(handleClearCartLoading())
    fetch(`http://localhost:8080/cartitems`,{
        method:"PATCH",
        
        body:JSON.stringify(),
        headers:{
        "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{dispatch(handleClearCart())
        dispatch(cartDataFetching())
    })
    .catch(err=>dispatch(handleClearCartErr()))
}

export const addToCartFetching =(data)=>(dispatch)=>{
    dispatch(handleAddToCartLoading())
    fetch(`http://localhost:8080/cartitems`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
        "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{dispatch(handleAddToCart())
        dispatch(cartDataFetching())
    })
    .catch(err=>dispatch(handleAddToCartErr()))
}

export const deleteFromCartFetching =(id)=>(dispatch)=>{
    dispatch(handleRemoveFromCartLoading())
    fetch(`http://localhost:8080/cartitems/${id}`,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{dispatch(handleRemoveFromCart())
        dispatch(cartDataFetching())
    })
    .catch(err=>dispatch(handleRemoveFromCartErr()))
}

export const handleCheckOutFetching =(data) => (dispatch, state) => {
    dispatch(handleCheckOutLoading())
    fetch(`http://localhost:8080/orderHistory`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
        "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        dispatch(handleCheckOut())
        dispatch(clearCartFetching())
    })
    .catch(err=>dispatch(handleAddToCartErr()))
}


export const incProductFetching=(id)=>(dispatch,state)=>{
    dispatch(handleIncLoading())
const items=state().Cart.cart
const item=items.find(ele=>ele.id==id)
    fetch(`http://localhost:8080/cartitems/${id}`,{
        method:"PATCH",
        body:JSON.stringify({
            count:(item.count+1)
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        dispatch(cartDataFetching())
        dispatch(handleInc())
    })
    .catch(err=> dispatch(handleIncErr()))
}

export const decProductFetching=(id)=>(dispatch,state)=>{
    const items=state().Cart.cart
    const item=items.find(ele=>ele.id==id)
        fetch(`http://localhost:8080/cartitems/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                count:(item.count-1)
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res=> res.json())
        .then(data=> {
            dispatch(handleDec())
            dispatch(cartDataFetching())            
        })
        .catch(err=>dispatch(handleDecErr()))
    }