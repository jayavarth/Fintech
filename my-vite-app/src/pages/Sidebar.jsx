import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HistoryIcon from '@mui/icons-material/History'; 
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate("/login"); 
    window.location.reload(); 
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 170,
        flexShrink: 0,
        position: "fixed",  
        height: "100vh",    
        '& .MuiDrawer-paper': {
          width: 210,  
          backgroundColor: 'rgb(25,31,52)',
          color: 'white',
          paddingTop: 2,
          height: "100vh",
        }
      }}
    >
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
          <ListItemIcon>
            <PersonIcon style={{ color: 'white', fontSize: 50 }} />
          </ListItemIcon>
        </ListItem>

        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <PersonIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/add-user">
          <ListItemIcon>
            <AccessAlarmIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Add User" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/add-expense">
          <ListItemIcon>
            <HistoryIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Add Expense" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={Link} to="/invest-ideas">
          <ListItemIcon>
            <HistoryIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Invest Ideas" sx={{ color: 'white' }} />
        </ListItem>

        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
