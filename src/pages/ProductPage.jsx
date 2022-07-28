import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const ProductPage = () => {
    const [item, setItem]=React.useState({});
    const {id}=useParams()
    React.useEffect(()=>{
       fetch(`http://localhost:8080/products/${id}`)
    .then(res=>res.json())
    .then(data=>setItem(data))
    .catch(err=>console.log(err))
    },[])
   
const {title, color, price, description, rating, category, hex, imageBase}=item
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
        {
          (<>
          <Button variant='contained'>Add to cart</Button>
          </>) 
        }
        
        <Button variant='contained'>Delete </Button>
      </CardActions>
    </Card>        
    </div>
  )
}


