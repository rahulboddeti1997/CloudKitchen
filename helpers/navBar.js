import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="fixed" color="default" style={{backgroundColor: '#000080', color: 'white'}}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <img src={'/logo.jpg'} width={200} height={60} style={{marginLeft:10}}/>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }} style={{marginLeft: 15}}>
          <nav>
            <Link href="eaters" variant="button" color="textPrimary" sx={{ mx: 1 }} style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: 18, marginLeft: 20}}>
              Eaters
            </Link>
            <Link href="hygeine" variant="button" color="textPrimary" sx={{ mx: 1 }} style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: 18, marginLeft: 20}}>
              Hygeine Check
            </Link>
            <Link href="offers" variant="button" color="textPrimary" sx={{ mx: 1 }} style={{color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: 18, marginLeft: 20}}>
              Offers
            </Link>
          </nav>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <Drawer anchor="right" open={openDrawer} onClose={closeDrawer}>
            <List sx={{ width: 200 }} onClick={closeDrawer}>
              <ListItem button component="a" href="eaters">
                <ListItemText primary="Eaters" />
              </ListItem>
              <ListItem button component="a" href="hygeine">
                <ListItemText primary="Hygeine Check" />
              </ListItem>
              <ListItem button component="a" href="offers">
                <ListItemText primary="Offers" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
