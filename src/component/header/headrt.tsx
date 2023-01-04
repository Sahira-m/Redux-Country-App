import  React from 'react';
import {Link} from "react-router-dom"; 
import { useSelector } from 'react-redux';

//Mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from  "@mui/icons-material/Favorite";
import HouseIcon from '@mui/icons-material/House';
import { Button } from '@mui/material';

//Redux store
import { RootState } from '../../redux/store';

export default function Header()
 {
    const favaoriteList=useSelector((state:RootState)=>state.country.favoriteList);
    const style = { textDecoration: 'none' };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

/*   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 */
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
          {/* <IconButton aria-label="add to favorites" onClick={getFavorite}> */}
          <IconButton aria-label="add to favorites">
          <FavoriteIcon   />
        </IconButton>
            
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            {/* <NotificationsIcon /> */}
            <IconButton aria-label="add to favorites" >
          <HouseIcon  />
        </IconButton>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
         return (
         <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
               <Toolbar>
                  <IconButton
                     size="large"
                   edge="start"
                     color="inherit"
                   aria-label="open drawer"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                   <Typography
                    variant="h6"
                    noWrap
                     component="div"
                     sx={{ display: { xs: 'none', sm: 'block' } }}
                   >
                    Country
                   </Typography> 
                   <Box sx={{ flexGrow: 5 }} />
                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                 <Link style={style}  to="" ></Link>
             <HouseIcon/> 
                       <Button>homes</Button>
                       </Box>
                    <Box sx={{ flexGrow: 1 }} />
                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link style={style}  to="/favorite"> 
                        <Badge badgeContent={favaoriteList.length} color="error">
                        <FavoriteIcon />  </Badge>
                       </Link>   
                   </Box>
               </Toolbar>
             </AppBar>             
            </Box> 
             
         );
 
                }