import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }



export default function RecipeReviewCard(props) {
const {title, color, price, rating, category,imageBase}=props.item
  return (
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
      </CardContent>
      <CardActions disableSpacing>
        <Link to="/">View More</Link>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
