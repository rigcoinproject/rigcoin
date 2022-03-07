import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';

import HeaderView from './children/header';
import FooterView from './children/footer';


const ErrorView = (props) => {
  const { window } = props;
  const location  = useLocation();

  const style = {
    home: {
      backgroundColor: 'black',
      color: 'white'
    },
    subtitle: {
      padding: '10px',
      fontSize: '16px',
      textAlign: 'center',
    },
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
            <Grid item xs></Grid>
            <Grid item xs={10} md={10} lg={10} style={style.subtitle}>
              <Box sx={{p:2, my: 2}}>
                <Box sx={{p:2, my: 2, display: 'block'}}>
                An Error has occured. The path {location.pathname}, does not exist.
                </Box>
                <Box sx={{p:2, my: 2, display: 'block'}}>
                  If this issue persists, please reach out via Twitter @ rigcoinproject.
                </Box>
              </Box>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
          <FooterView />
      </Box>
    </Box>
  )
}

export default ErrorView;
