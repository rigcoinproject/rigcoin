import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from "react-router-dom";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const style = {
  appBar: {
    backgroundColor: 'black',
  },
  drawer: {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
}

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  //
  // Note how target is commented out, but it still performs as intended
  const trigger = useScrollTrigger({
    //target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const HeaderView = (props) => {
  const { container, type } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /*
  *Drawer has 3 types
  * HomeView (launch app, Tos)
  * TosView (Home, Launch App)
  * AppView (Home, Tos)
  * ConnectView (Home, Tos)
  * ErrorView (Home, Tos)
  */
  let drawer, links;
  switch (type) {
    case '1':
      drawer = (
          <div style={style.drawer}>
            <Toolbar />
            <Divider />
            <List>
              <Link style={style.link} to="/app" onClick={handleDrawerToggle}>
                <ListItem button key="Launch App">
                  <ListItemIcon>
                    <ViewListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Launch App"/>
                </ListItem>
              </Link>
              <Link style={style.link} to="/tos" onClick={handleDrawerToggle}>
                <ListItem button key="Terms of Service">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Terms of Service"/>
                </ListItem>
              </Link>
            </List>
            </div>
      );
      links = (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/app"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Launch App
            </Button>
          </Link>
          <Link to="/tos"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Terms Of Service
            </Button>
          </Link>
        </Box>
      );
      break;
    case '2':
      drawer = (
          <div style={style.drawer}>
            <Toolbar />
            <Divider />
            <List>
              <Link style={style.link} to="/" onClick={handleDrawerToggle}>
                <ListItem button key="Home">
                  <ListItemIcon>
                    <ViewListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItem>
              </Link>
              <Link style={style.link} to="/app" onClick={handleDrawerToggle}>
                <ListItem button key="Launch App">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Launch App"/>
                </ListItem>
              </Link>
            </List>
            </div>
      );
      links = (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
            </Button>
          </Link>
          <Link to="/app"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Launch App
            </Button>
          </Link>
        </Box>
      );
      break;
    case '3':
      drawer = (
          <div style={style.drawer}>
            <Toolbar />
            <Divider />
            <List>
              <Link style={style.link} to="/" onClick={handleDrawerToggle}>
                <ListItem button key="Home">
                  <ListItemIcon>
                    <ViewListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItem>
              </Link>
              <Link style={style.link} to="/tos" onClick={handleDrawerToggle}>
                <ListItem button key="Terms of Service">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Terms of Service"/>
                </ListItem>
              </Link>
            </List>
            </div>
      );
      links = (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
            </Button>
          </Link>
          <Link to="/tos"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Terms Of Service
            </Button>
          </Link>
        </Box>
      );
      break;
    default:
      drawer = (
          <div style={style.drawer}>
            <Toolbar />
            <Divider />
            <List>
              <Link style={style.link} to="/" onClick={handleDrawerToggle}>
                <ListItem button key="Home">
                  <ListItemIcon>
                    <ViewListIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItem>
              </Link>
              <Link style={style.link} to="/tos" onClick={handleDrawerToggle}>
                <ListItem button key="Terms of Service">
                  <ListItemIcon>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Terms of Service"/>
                </ListItem>
              </Link>
            </List>
            </div>
      );
      links = (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
            </Button>
          </Link>
          <Link to="/tos"  style={style.link}>
            <Button
              key={0}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Terms Of Service
            </Button>
          </Link>
        </Box>
      );
  }

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar style={style.appBar}>
          <Toolbar >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to="/"  style={style.link}>
                Rigcoin
              </Link>
            </Typography>

            {links}

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Link to="/"  style={style.link}>
                Rigcoin
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box
        component="main"
        aria-label="mailbox folders"
      >

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
              color: 'white',
              textDecoration: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default HeaderView;
