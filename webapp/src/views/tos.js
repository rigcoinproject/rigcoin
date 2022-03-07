import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';

import HeaderView from './children/header';
import FooterView from './children/footer';

const TosView = (props) => {
  const { window } = props;

  const style = {
    home: {
      backgroundColor: 'black',
      color: 'white'
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
      <HeaderView container={container} type='2'/>
      <Box
        component="main"
        style={style.home}
        sx={{ flexGrow: 1, p:2 }}
      >
        <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} style={style.heading}>
              <Box sx={{p:1, my:2}}>
                <Box sx={{p:1, display: 'block'}}>
                  RIGCOIN (Terms of Service)
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} style={style.subtitle}>
              <Box sx={{p:1, my:2}}>
                <Box sx={{p:1, display: 'block'}}>
                  Rigcoin is a collection of digital artworks (NFTs) stored on the Ethereum blockchain. This website
                  is only an interface to allow participants to create digital collectibles and tokens. Participants
                  are responsible for the safety and management of their private Ethereum wallets and for validiating transactions
                  created by the contracts linked through this website. All of Rigcoin NFTs & Tokens
                  are provided "as is" and "as avaialble" without warrany of any kind. By using this website you are aggreeing to
                  these terms and you accept full responsibly for any and all results of your actions with the
                  contracts linked on this website.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
          <Toolbar />
          <Divider style={style.divider} />
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} style={style.heading}>
              <Box sx={{p:1, my:2}}>
                <Box sx={{p:1, display: 'block'}}>
                  OWNERSHIP
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
          <Toolbar />
          <Grid container spacing={3}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10}  style={style.subtitle}>
              <Box sx={{p:1, my:2}}>
                <Box sx={{p:1, display: 'block'}}>
                  i. You own the NFT and any tokens it creates that are immediately transferred to you. You take ownership of the Rig NFT as soon as it is minted and
                  since you fully own it, you are 100% free to do with it as you please. Once you take ownership by minting a Rig, you can instantly mine Rigcoins,
                  but you can also Trade it! If you aquired a Rig NFT through a transfer (not from directly calling the Mint function yourself) you must wait until
                  a claim is available before you can Mine with it. This can easily be checked on [Your Rigs] inside this app.
                </Box>
                <Box sx={{p:1, display: 'block'}}>
                  ii. Personal Use. You own it and you can do with it as you please. Rig NFTs are compataible with all platforms that accept ERC721 NFTs.
                </Box>
                <Box sx={{p:1, display: 'block'}}>
                  iii. Commercial Use. You own it and you can do with it as you please. Rig NFTs are compataible with all platforms that accept ERC721 NFTs.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
        <FooterView />
      </Box>
    </Box>
  );
};
export default TosView;
