import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = ({ role, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ padding: '0 16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src="logo/tvslogo.jpg" alt="TVS Logo" width="60" height="30" style={{ marginRight: '16px' }} />
          </Link>
        </Box>

        {role && (
          <>
            <Button color="inherit" component={Link} to="/aboutus">About Us</Button>
            <Button color="inherit" component={Link} to="/home">Home</Button>
            <Button color="inherit" component={Link} to="/products">Our Products</Button>
            <Button color="inherit" component={Link} to="/services">Our Service</Button>
            <Button color="inherit" component={Link} to="/investors">Investors</Button>
            <Button color="inherit" component={Link} to="/sustainability">Sustainability</Button>
            <Button color="inherit" component={Link} to="/media">Media</Button>
            <Button color="inherit" component={Link} to="/international">International</Button>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ marginRight: '8px' }}>
                SHOP
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="shop"
                aria-controls="shop-menu"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MoreVertIcon />
              </IconButton>
            </Box>

            <Menu
              id="shop-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <a href="https://shop.tvsmotor.com/" target="_blank" rel="noopener noreferrer">
                  Accessories & Merchandise
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="https://www.advantagetvs.com/PartEcommerceUI/home?Type=Customer" target="_blank" rel="noopener noreferrer">
                  Parts & Lubricants
                </a>
              </MenuItem>
            </Menu>


            {role === 'admin' && (
              <Button color="inherit" component={Link} to="/admin">Admin</Button>
            )}
            {role === 'user' && (
              <Button color="inherit" component={Link} to="/user">User</Button>
            )}

            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon />
            </IconButton>

            <IconButton color="inherit" component={Link} to="/userform">
              <AccountCircleIcon />
            </IconButton>
            <Button color="inherit" onClick={onLogout}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
