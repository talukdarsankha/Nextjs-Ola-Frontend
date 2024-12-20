




"use client"





import { MenuOutlined } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React, { useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/navigation'



function BookRideNavbar() {

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setSideBarOpen((prevState) => !prevState);
  };


  const router =  useRouter();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{backgroundColor:'#120E43', flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton onClick={handleSideBar} 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuOutlined />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ola Cab
            </Typography>

            {true ?<Avatar onClick={()=>router.push('/profile')} className='cursor-pointer' sx={{bgcolor:deepPurple[700]}}>
                A
            </Avatar> :
            <Button color="inherit">Login</Button>
            }
            </Toolbar>
        </AppBar>

        <Drawer anchor='left' open={sideBarOpen} onClose={handleSideBar}>
          {DrawerList}
        </Drawer>
        </Box>
    </div>
  )
}

export default BookRideNavbar
