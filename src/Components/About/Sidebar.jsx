import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Contexts/UserContext';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({ menu, toggleMenu }) {
  const { auth } = useAuth();

  return (
    <Drawer
      anchor="left"
      open={menu}
      onClose={toggleMenu}
      PaperProps={{
        sx: {
          width: { xs: '75%', sm: '50%', md: '25%' },
          backgroundColor: 'white',
        },
      }}
    >
      <div className="flex justify-end p-2">
        <IconButton onClick={toggleMenu}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        <ListItem button component={NavLink} to="/" onClick={toggleMenu}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/about" onClick={toggleMenu}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={NavLink} to="/product" onClick={toggleMenu}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={NavLink} to="/support" onClick={toggleMenu}>
          <ListItemText primary="Support" />
        </ListItem>
        {auth.user && auth.user.role === 1 && (
          <ListItem button component={NavLink} to="/admin" onClick={toggleMenu}>
            <ListItemText primary="Dashboard" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
}

export default Sidebar;