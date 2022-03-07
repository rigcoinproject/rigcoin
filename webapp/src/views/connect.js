import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from '.././components/auth';

import HeaderView from './children/header';
import FooterView from './children/footer';


const ConnectView = (props) => {
  const { window } = props;
  const auth = useAuth();

  const handleSubmit = () => {
      auth.connect()
        .then(accounts => {
          //console.log("Welcome to Rigcoin: ", accounts[0]);
          // Send them back to the page they tried to visit when they were
          // redirected to the login page. Use { replace: true } so we don't create
          // another entry in the history stack for the login page.  This means that
          // when they get to the protected page and click the back button, they
          // won't end up back on the login page, which is also really nice for the
          // user experience.
          //navigate(from, { replace: true });
      })
      .catch(e => console.log(e));
  }

  const style = {
    home: {
      backgroundColor: 'black',
      color: 'white'
    },
    launchDiv: {
      backgroundColor: '#5fdb49',
      borderRadius: '5px',
      padding: '20px',
      color: 'white'
    },
    launchFont: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    launchBtn: {
      backgroundColor: '#40a124',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    divider: {
      backgroundColor: 'white',
    },
    subtitle: {
      padding: '10px',
      fontSize: '16px',
    },
    heading: {
      padding: '10px',
    }
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <CssBaseline />
      <HeaderView container={container} type='3'/>
      <Box
        component="main"
        style={style.home}
        sx={{ flexGrow: 1, p:2 }}
      >
        <Toolbar />
            <Grid container spacing={3}>
              <Grid item xs={1} md={2} lg={2}></Grid>
              <Grid item xs={10} md={8} lg={8}>
                <Typography component="div" variant="h3" style={style.heading}>
                  Connect your Metamask wallet to begin
                </Typography>
                <Typography component="div" variant="subtitle2" style={style.subtitle}>
                  This website has only been tested to work with Metamask.
                </Typography>
              </Grid>
              <Grid item xs={1} md={2} lg={2}></Grid>
            </Grid>
            <Toolbar />
            <Grid container spacing={0}>
              <Grid item xs={1} md={1} lg={1}></Grid>
              <Grid item xs={10} md={10} lg={10}  style={style.launchDiv}>
                <Grid container spacing={0}>
                  <Grid item xs={8} md={8} lg={8}>
                    <Typography component="div" variant="subtitle1" sx={{mt:'8px'}} style={style.launchFont}>
                      Connect Metamask
                    </Typography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <Button variant="contained" style={style.launchBtn} onClick={handleSubmit}>Connect</Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>
        <FooterView />
      </Box>
    </Box>
  )
}

export default ConnectView;
