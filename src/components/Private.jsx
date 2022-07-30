import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export const Private = ({children}) => {

    const {token}=useSelector(state=>state.Auth);
    const navigate=useNavigate();

    if(!token){
        navigate("/login")
    }
  return (children
  )
}
