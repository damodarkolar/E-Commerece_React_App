import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useNavigate} from "react-router-dom"
export default function Navbar() {
const navigate=useNavigate()
    const [state, setState] = React.useState(false);

    const toggleDrawer =(open)=>{
        setState(open);
      };
    const list = (anchor: Anchor) => (
        <Box
          sx={{ width:  250 }}
          role="presentation"
          onClick={()=>toggleDrawer( false)}
          onKeyDown={()=>toggleDrawer(false)}
        >
          <List>          
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>                    
                  </ListItemIcon>
                  <ListItemText primary={"HOME"} />
                </ListItemButton>
              </ListItem>
          </List>
          <List>          
              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    <LocalGroceryStoreIcon/>                    
                  </ListItemIcon>
                  <ListItemText primary={"GROCERY"} />
                </ListItemButton>
              </ListItem>
          </List>
          <List>          
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MedicationIcon/>                    
                  </ListItemIcon>
                  <ListItemText primary={"PHARMACY"} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Sign Up"} />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Login "} />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Log Out"} />
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
      );
    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Drawer
            anchor={"left"}
            open={state}
            onClose={()=> toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        <Toolbar>
          <IconButton
          onClick={()=>toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/login")}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

