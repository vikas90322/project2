import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card1 from '../task1/Card1';

import '../task1/Card1.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import { AiFillStar } from 'react-icons/ai';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Rating } from 'flowbite-react';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Task3 = () => {

    const data = [
        { id: 1, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/Mango-2.png' ,name:'Sea Salt Caramel' ,text:'The unforgettable taste of caramel salt in every bite.',price:'123.00',Rating:4,stars:'★★★★'},
        { id: 2, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Indian-Flavours.png',name:'Dry Fruit Overload' ,text:'The richness of Kaju, Badams, Pista, and Kishmish in every scoop.',price:'132.00',Rating:5,stars:'★★★★★'},
        { id: 3, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/SP-SS-Caramel.png',name:'Madagascar Chocolate' ,text:'Rich and creamy dark chocolate with a melt in the mouth experience',price:'129.00',Rating:3,stars:'★★★'},
        { id: 4, pic:'https://nicicecreams.com/wp-content/uploads/2022/07/IMG-10.png' ,name:'Sugarless Tender Coconut' ,text:'Light ice cream loaded with the sweetness of tender coconuts, but with less sugar.',price:'128.99',Rating:4,stars:'★★★★'},
        { id: 5, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Super-Premium.png',name:'Apricot' ,text:'World’s most premium dried fruit in every scoop of rich and creamy ice cream.',price:'259.99',Rating:4,stars:'★★★★'},
        { id: 6, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png' ,name:'French Vanilla' ,text:'No extracts or essence, an ice cream loaded with vanilla.',price:'199.99',Rating:4,stars:'★★★★'},
        { id: 7, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/Fruit-N-Nut-1.png' ,name:' Caramel' ,text:'The unforgettable taste of caramel salt in every bite.',price:'179.69',Rating:5,stars:'★★★★★'},
        { id: 8, pic: 'https://nicicecreams.com/wp-content/uploads/2022/07/new-scaled.jpg',name:'Dry Fruit' ,text:'The richness of Kaju, Badams, Pista, and Kishmish in every scoop.',price:'145.00',Rating:5,stars:'★★★★★'},
        { id: 9, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Sugarless-Coconut-1.png',name:'Coconut Chocolate' ,text:'Rich and creamy dark chocolate with a melt in the mouth experience',price:'231.49',Rating:5,stars:'★★★★★'},
        { id: 10, pic:'https://nicicecreams.com/wp-content/uploads/2022/07/IMG-10.png' ,name:' Coconut Cream' ,text:'Light ice cream loaded with the sweetness of tender coconuts, but with less sugar.',price:'150.00',Rating:5,stars:'★★★★★'},
        { id: 11, pic: 'https://nicicecreams.com/wp-content/uploads/2023/01/Super-Premium.png',name:'Apricot Premium' ,text:'World’s most premium dried fruit in every scoop of rich and creamy ice cream.',price:'120.00',Rating:3,stars:'★★★'},
        { id: 12, pic:'https://nicicecreams.com/wp-content/uploads/2023/01/IP-French-Vanilla.png' ,name:'Light Vanilla' ,text:'No extracts or essence, an ice cream loaded with vanilla.',price:'108.5',Rating:4,stars:'★★★★'},
        
      ]; 

      

      const[search,setSearch]=useState('');
      const handleInputChange=(e)=>{
        setSearch(e.target.value)
      }
     
      const fd=data.filter((items)=>{
        const itemSearched=search.toLowerCase();
        return(
       
            items.name.toLowerCase().includes(itemSearched) ||
            items.price.toString().includes(itemSearched)||
            items.id.toString().includes(itemSearched)||
            items.Rating.toString().includes(itemSearched)

          
        );
      });
      




      const rows = fd.map((item) => (
       
       
      <div className='cardcontainer'>
      
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={item.pic} fluid alt='...'style={{height:'13em'}}  />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <h5 style={{color:"darkblue"}} >{item.name}</h5>
          <p>Price : <span style={{color:'green'}}> {item.price}₹</span></p>
          <h6 style={{color:'blueviolet'}} >   {item.text}</h6>
          <p>Rating :  <span style={{color:'gold'}}  >
             
           {item.stars}
             
            
            
            </span> </p>
          <MDBBtn  color='dark'>Buy Now</MDBBtn>
        </MDBCardBody>
     
    </div>
  


      ));








    
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  return (
    <div>
            <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <div style={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>  
          <div>
            
          Ice Cream Shop
          </div>
            <div style={{position:'absolute',left:'45em',width:'20em',margin:'1em'}}>
            <label htmlFor="">Search: </label> <input type="text" name="" value={search} onChange={handleInputChange} id=""  />
            </div>
           </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <div  className='GridCardcontainer'>
    
     
     {rows}
     
    </div>
        




      
      </Box>
    </Box>
      
    </div>
  )
}

export default Task3
