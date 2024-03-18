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
const [loginData,setLoginData]=React.useState(logDetails);
const dispatch=useDispatch()
const {token }=useSelector(state=>state.Auth)

const {email, password}=loginData
const navigate=useNavigate()
console.log(token)

if(!!token){
navigate("/")
}


const handleOnChange=(e)=>{
const {name , value}=e.target;
setLoginData(prev=> ({...loginData,[name]:value}));
}

const handleLogin=()=>{
console.log(loginData)

  dispatch(handleLoginLoading())
  fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res=>res.json())
  .then(data=>{
    dispatch(handleLoginSuccess(data.token))
    navigate("/")
  })
  .catch(err=>{
    console.log(err)
    dispatch(handleLoginErr())})
  setLoginData(logDetails)
}




  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Container maxWidth="sm" width="500px" >
        <TextField onChange={handleOnChange} name="email" value={email}label="user name" color="secondary" focused />
      <TextField onChange={handleOnChange} label="password" name="password" value={password} color="secondary" focused />
      <Button onClick={handleLogin} variant="contained">Log In</Button>
      </Container>
    
    </div>
  )
}
