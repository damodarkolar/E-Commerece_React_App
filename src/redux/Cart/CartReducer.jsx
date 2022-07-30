import { handleAddToCart, handleAddToCartErr, handleAddToCartLoading, handleCheckOutLoading, handleClearCart, handleClearCartErr, handleClearCartLoading, handleGetCart, handleGetCartErr, handleGetCartLoading, handleGetOrderHistory, handleGetOrderHistoryErr, handleGetOrderHistoryLoading, handleRemoveFromCart, handleRemoveFromCartErr, handleRemoveFromCartLoading } from "./actions";
import { ADD_TO_CART, ADD_TO_CART_LOADING, ADD_TO_CART_ERR, CLEAR_CART, CLEAR_CART_LOADING, CLEAR_CART_ERR, REMOVE_FROM_CART, REMOVE_FROM_CART_LOADING, REMOVE_FROM_CART_ERR, INC_CART, INC_CART_LOADING, INC_CART_ERR, DEC_CART, DEC_CART_LOADING, DEC_CART_ERR, GET_CART, GET_CART_LOADING, GET_CART_ERR, ADD_ODER_HISTORY, ADD_ODER_HISTORY_LOADING, ADD_ODER_HISTORY_ERR, GET_ODER_HISTORY, GET_ODER_HISTORY_LOADING, GET_ODER_HISTORY_ERR, CHECK_OUT, CHECK_OUT_LOADING, CHECK_OUT_ERR } from "./actionTypes";

const cartInitial={
    addToCartLoading: false,
    addToCartErr:false,
    clearCartLoading:false,
    clearCartErr:false,
    removeFromCartLoading:false,
    removeFromCartErr:false,
    incLoading:false,
    incErr:false,
    decLoading:false,
    decErr:false,
    addOrderHistoryLoading:false,
    addOrderHistoryErr:false,
    checkOutLoading:false,
    checkOutErr:false,
    getCartLoading:false,
    getCartErr:false,
    getOrderHistoryLoading:false,
    getOrderHistoryErr:false,    
    cart:[],
    orderHistory:[]
}

export const CartReducer = (store=cartInitial, action)=>{
    switch (action.type) {
            case ADD_TO_CART_LOADING:
            return{
                ...store,
                addToCartLoading:true,
                addToCartErr:false
            }
            case ADD_TO_CART_ERR:
            return{
                ...store,
                addToCartLoading:false,
                addToCartErr:true
            }
            case ADD_TO_CART:
            return{
                ...store,
                addToCartLoading:false,
                addToCartErr:false
            }
            case CLEAR_CART_LOADING:
            return{
                ...store,
                clearCartLoading:true,
                clearCartErr:false
            }
            case CLEAR_CART_ERR:
                return{
                    ...store,
                    clearCartLoading:false,
                    clearCartErr:true
                }
            case CLEAR_CART:
                return{
                    ...store,
                    clearCartLoading:false,
                    clearCartErr:false
                }
            case REMOVE_FROM_CART_LOADING:
            return{
                ...store,
                removeFromCartLoading:true,
                removeFromCartErr:false
            }
            case REMOVE_FROM_CART_ERR:
            return{
                ...store,
                removeFromCartLoading:false,
                removeFromCartErr:true
            }
            case REMOVE_FROM_CART:
            return{
                ...store,
                removeFromCartLoading:false,
                removeFromCartErr:false
            }
            case INC_CART_LOADING:
            return{
                ...store,
                incLoading:true,
                incErr:false
            }
            case INC_CART_ERR:
            return{
                ...store,
                incLoading:false,
                incErr:true
            }
            case INC_CART:
            return{
                ...store,
                incLoading:false,
                incErr:false
            }
            case DEC_CART_LOADING:
                return{
                    ...store,
                    decLoading:true,
                    decErr:false
                }
            case DEC_CART_ERR:
                return{
                    ...store,
                    decLoading:false,
                    decErr:true
                }
            case DEC_CART:
                return{
                    ...store,
                    decLoading:false,
                    decErr:false
                }
            case ADD_ODER_HISTORY_LOADING:
                return{
                    ...store,
                    addOrderHistoryLoading:true,
                    addOrderHistoryErr:false
                }
            case ADD_ODER_HISTORY_ERR:
                return{
                    ...store,
                    addOrderHistoryLoading:false,
                    addOrderHistoryErr:true
                }
            case ADD_ODER_HISTORY:
                return{
                    ...store,
                    addOrderHistoryLoading:false,
                    addOrderHistoryErr:false
                }
            case CHECK_OUT_LOADING:
                return{
                    ...store,
                    checkOutLoading:true,
                    checkOutErr:false
                }
            case CHECK_OUT_ERR:
                return{
                    ...store,
                    checkOutLoading:false,
                    checkOutErr:true
                }
            case CHECK_OUT:
                return{
                    ...store,
                    checkOutLoading:false,
                    checkOutErr:false
                }
            case GET_CART:
                return{
                    ...store,
                    getCartLoading:false,
                    getCartErr:false,
                    cart:action.payload
                }
            case GET_CART_LOADING:
                return{
                    ...store,
                    getCartLoading:true,
                    getCartErr:false
                }
            case GET_CART_ERR:
                return{
                    ...store,
                    getCartLoading:false,
                    getCartErr:true
                }
            case GET_ODER_HISTORY:
                return{
                    ...store,
                    getOrderHistoryLoading:false,
                    getOrderHistoryErr:false,
                    orderHistory:action.payload
                }
            case GET_ODER_HISTORY_LOADING:
                return{
                    ...store,
                    getOrderHistoryLoading:true,
                    getOrderHistoryErr:false
                }
            case GET_ODER_HISTORY_ERR:
                return{
                    ...store,
                    getOrderHistoryLoading:false,
                    getOrderHistoryErr:true
                }    
        default:
            return{
                ...store
            }
    }
}





