import * as React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import CssBaseline from '@mui/material/CssBaseline';
import promo1 from '.././assets/promo1.png';
import promo2 from '.././assets/promo2.png';
import promo3 from '.././assets/promo3.png';
import promo4 from '.././assets/promo4.png';
import promo5 from '.././assets/promo5.png';
import promo6 from '.././assets/promo6.png';

import HeaderView from './children/header';
import FooterView from './children/footer';

const HomeView = (props) => {
  const { window } = props;


  const style = {
    home: {
      backgroundColor: 'black',
      color: 'white'
    },
    launchDiv: {
      backgroundColor: '#5fdb49',
      borderRadius: '5px',
      padding: '20px',
      textAlign: 'center',
    },
    launchFont: {
      color: 'black',
      fontSize: '10px',
      fontWeight: 'bold',
      textShadow: 'rgb(255 255 255 / 56%) 1px 1px',
    },
    launchBtn: {
      backgroundColor: '#40a124',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 10,
      padding: 8,
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
    miniSubtitle: {
      padding: '0px',
      fontSize: '10px',
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
      <HeaderView container={container} type='1'/>
      <Box
        component="main"
        style={style.home}
        sx={{ flexGrow: 1, p:2 }}
      >
        <Toolbar />

            <Grid container spacing={3}>
              <Grid item xs={1} md={2} lg={2}></Grid>
              <Grid item xs={10} md={8} lg={8}>
                <Box sx={{ my: 1 }}>
                  <img alt='main rig promo' src={promo6} height='100%' width='100%'></img>
                </Box>
              </Grid>
              <Grid item xs={1} md={2} lg={2}></Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={7}>
              <Toolbar />
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="h3" style={style.heading}>
                      Welcome to Rigcoin
                    </Typography>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                      Rigcoin is an unlimited supply token, minted by Rig NFTs, which
                      are a collection of 5,000 unique generative NFTs. Each Rig
                      grants the owner control over a portion of the future supply of Rigcoin
                      tokens. Owners help to ensure "proof of work" is completed which is how
                      they control the Rigcoin token supply.
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Toolbar />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="h6" style={style.heading}>
                      Rethink Distribution
                    </Typography>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                      No starting supply and no fees... Forever! Let that sink in.
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
                <Toolbar />
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <Toolbar />
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Grid container spacing={3}>
                      <Grid item xs={6} md={6} lg={6}>
                        <img alt='creators reserverd NFT' src={promo1} height='100%' width='100%'></img>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <img alt='creators reserverd NFT' src={promo2} height='100%' width='100%'></img>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <img alt='creators reserverd NFT' src={promo3} height='100%' width='100%'></img>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <img alt='creators reserverd NFT' src={promo4} height='100%' width='100%'></img>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Box sx={{
                      p: 1,
                      textAlign: 'center',
                    }}
                    >
                      <Typography component="div" variant="subtitle6" style={style.miniSubtitle}>
                        500 Rigs [4501-5000] have been reserved by the creator for revenue, promos, and the unknown.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
              </Grid>
            </Grid>

            <Toolbar />

            <Grid container spacing={0}>
              <Grid item xs={1} md={1} lg={1}></Grid>
              <Grid item xs={10} md={10} lg={10}  style={style.launchDiv}>
                <Grid container spacing={0}>
                  <Grid item xs={8} md={8} lg={8}>
                    <Typography component="div" variant="subtitle1" sx={{mt:'8px'}} style={style.launchFont}>
                      Mint a Rig on Etherum Mainnet
                    </Typography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <Link to='/app' style={style.link}>
                      <Button variant="contained" style={style.launchBtn}>Launch App</Button>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>
            <Toolbar />

            <Divider style={style.divider} />

            <Toolbar />
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={7}>
              <Toolbar />
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="h4" style={style.heading}>
                      Codified Mining Rigs
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                       Can there be a coded equilivalent of a physical mining rig to create
                       valid proof of work? That is the question this project hopes to answer. To keep
                       things simple here are three mains features to consider.
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <Grid container spacing={3}>
                  <Grid item xs></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                      (1) - Rig NFTs and Rigcoin tokens cost whatever the current ETH gas fee is
                      to call the mint function.
                    </Typography>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                      (2) - Each Rig can mint a given amount of coins roughly every 2 - 7 days, both
                      of which are pseudo randomly determined when the Rig is initially minted.
                    </Typography>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                      (3) - By default, only the Rig owner can call the functions that mint
                      Rigcoins, but the contract does allow the owner to modify this
                      permission.
                    </Typography>
                  </Grid>
                  <Grid item xs></Grid>
                </Grid>
              </Grid>
            </Grid>

            <Toolbar />
            <Divider style={style.divider} />
            <Toolbar />

            <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={7}>
                <Toolbar />
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="h4" style={style.heading}>
                      Specs
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Typography component="div" variant="subtitle2" style={style.subtitle}>
                       Each Rig is an ERC 721 token and each Rigcoin is an ERC 20 token.
                       Both are stored on the Ethereum Mainnet. All of the "art" is stored
                       on IPFS.
                    </Typography>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} lg={5}>
                <Grid container spacing={3}>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={10} lg={10}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={12} lg={12}>
                        <img alt='small rig promo' src={promo5} height='100%' width='100%'></img>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} md={1} lg={1}></Grid>
                </Grid>
              </Grid>
            </Grid>
        <FooterView />
      </Box>
    </Box>
  );
};
export default HomeView;
