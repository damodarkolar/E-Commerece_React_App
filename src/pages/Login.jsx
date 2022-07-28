import { Button, TextField } from '@mui/material';
import React from 'react'
import { handleLoginLoading, handleLoginSuccess, handleLoginErr, handleLogOut } from "../redux/Auth/actions";
import Container from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const logDetails={
    email: "",
    password: "",
}
export const Login = () => {
const [loginData,setLoginData]=React.useState();
const dispatch=useDispatch()
// const {token }=useSelector(state=>state.auth)
const token=2
const {email, password}=loginData
const navigate=useNavigate()


if(!!token){
navigate("/")
}


const handleOnChange=(e)=>{
const {name , value}=e.target;
setLoginData(prev=> ({...loginData,[name]:value}));
}

const handleLogin=()=>{
  // dispatch(handleLoginLoading())
  fetch(``,{
    method:"POST",
    body:JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res=>res.json())
  .then(data=>{
    // dispatch(handleLoginSuccess(data))
    navigate("/")
  })
  // .catch(err=>dispatch(handleLoginErr()))
}




  return (
    <div>
      <Container maxWidth="sm" width="500px" padding="50px 10px 10px 200px">
          <TextField label="user name" color="secondary" focused />
      <TextField label="password" color="secondary" focused />
      <Button variant="contained">Log In</Button>
      </Container>
    
    </div>
  )
}
