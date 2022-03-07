import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const style = {
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  footDiv: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
  divider: {
    backgroundColor: 'white',
  },
}

const FooterView = () => {


  return (
    <div>
      <Toolbar />
      <Divider style={style.divider} />
      <Toolbar />
      <Grid container spacing={1} style={style.footDiv}>
        <Grid item xs={12} md={4} lg={4}>
          <Box sx={{p:1, my:2}}>
            <Box sx={{p:1, display: 'inline'}}>
              Art Proofs
            </Box>
            <Box sx={{p:1, display: 'inline'}}>
              NFT Contract
            </Box>
            <Box sx={{p:1, display: 'inline'}}>
              Token Contract
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box sx={{p:1, my:2}}>
            <Box sx={{p:1, display:{xs:'inline'}}}>
                Rigcoin 2022
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box sx={{p:1, my:0}}>
            <Box sx={{p:1, display:{xs:'inline'}}}>
              <a href="https://twitter.com/rigcoinproject" style={style.link}><TwitterIcon /></a>
            </Box>
            <Box sx={{p:1, display:{xs:'inline'}}}>
              <a href="https://github.com/rigcoinproject/rigcoin" style={style.link}><GitHubIcon /></a>
            </Box>
          </Box>
          <Box sx={{p:1}}>
            <Link to="/tos"  style={style.link}>
              Terms of Service
            </Link>
          </Box>
        </Grid>
      </Grid>
    <Toolbar />
    <Divider style={style.divider} />
  </div>
  )
}

export default FooterView;
