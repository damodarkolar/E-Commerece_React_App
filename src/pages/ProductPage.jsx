import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AddToCartButton, CartButtons, CheckOutButton, ClearCartButton, DecrementButton, IncrementButton, RemoveFromCartButton } from '../components/CartButtons';
import { handleGetCart, handleGetCartErr, handleGetCartLoading } from '../redux/Cart/actions';
import { cartDataFetching } from '../redux/Cart/CartReducer';

export const ProductPage = () => {
    const [item, setItem]=React.useState({});
    const [itemInCart, setItemInCart]=React.useState(false);
    const {id}=useParams()
    const {title, color, price, description, rating, category, hex, imageBase}=item
const {cart} =useSelector(state=> state.Cart)


    const itemPageItemFetching=(itemid)=>{
      fetch(`http://localhost:8080/products/${itemid}`)
    .then(res=>res.json())
    .then(data=>setItem(data))
    .catch(err=>console.log(err))
    }

    

    React.useEffect(()=>{
      itemPageItemFetching(id);
    },[])






    React.useEffect(()=>{
      let result=cart.find(el=>el.id==id)
      setItemInCart(result)
    },[cart])
    const {token}=useSelector(state=>state.Auth);
    const navigate =useNavigate()

    

    
    useEffect(() => {
      if(!token){
      navigate("/")
    }
    }, [])
    useEffect(() => {
      if(!token){
      navigate("/")
    }
    }, [token])
    

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <Card sx={{ maxWidth: 345, margin:"20px"}} >
      <CardHeader
        title = {title}
        subheader={color}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageBase}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h2>₹ {price}</h2>
                    <h2>Rating {rating}</h2>
            </div>
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!!itemInCart?( !!(itemInCart.count-1)?(<>
        <IncrementButton id={id}/>
          <Button variant='outlined'>{itemInCart.count} </Button>
          <DecrementButton  id={id}/>
        <RemoveFromCartButton id={id}/>
        </>
        ):
        (<>
          <IncrementButton id={id}/>
            <Button variant='outlined'>{itemInCart.count} </Button>
          <RemoveFromCartButton id={id}/>
          </>
          )):(<>
          <AddToCartButton data={item}/>
          </>) 
          
        }
      </CardActions>
    </Card>        
    </div>
  )
}


