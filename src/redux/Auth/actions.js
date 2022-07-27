 import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR, LOG_OUT } from "./actionTypes"
 
 const handleLoginLoading = () =>{

    return {
        type : LOGIN_LOADING
    }
 }

 const handleLoginSuccess = (payload) =>{

    return {
        type : LOGIN_SUCCESS,
        payload
    }
 }

 const handleLoginErr = () =>{

    return {
        type : LOGIN_ERR
    }
 }

 const handleLogOut = () =>{

    return {
        type : LOG_OUT
    }
 }