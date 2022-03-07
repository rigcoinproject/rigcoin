import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

import Image from '../.././ui-components/Image';

import { web3afterWindow } from '../.././util/CustomWeb3';
import RigNFTContract from '../.././contracts/RigNFT.json';
import RigTokenContract from '../.././contracts/RigToken.json';
import { useAuth } from '../.././components/auth';

const style = {
  item: {
    backgroundColor: '#202020',
    color: 'white',
  },
  image: {
    borderRadius: 2,
  },
  btn: {
    backgroundColor: '#40a124',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textDecoration: 'none',
    margin: 5,
  },
  btnDisabled: {
    backgroundColor: 'rgb(62 62 62)',
    color: '#525252',
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'italic',
    textDecoration: 'none',
  },
  divider: {
    backgroundColor: 'white',
  },
}
const CustomItemView = (props) => {
    const { alt, index, value, handleReloadList } = props;
    const [unMounted, setUnmounted] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [isClaimable, setIsClaimable] = useState(false);
    const [itemLoading, setItemLoading] = useState(true);
    const auth = useAuth();

    const mint = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigNFTContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigNFTContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const res = await contract.methods.safeMint(index).send({ from: auth.user[0]});
      if (!res) {
        throw new Error(`Mint error! status: ${res.status}`);
      }
      return await res;
    }

    const pubMine = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigTokenContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const res = await contract.methods.publicClaim(index).send({ from: auth.user[0] });
      if (!res) {
        throw new Error(`Public mining error! status: ${res.status}`);
      }
      return await res;
    }

    const ownerMine = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigTokenContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const res = await contract.methods.ownerClaim(index).send({ from: auth.user[0] });
      if (!res) {
        throw new Error(`Public mining error! status: ${res.status}`);
      }
      return await res;
    }

    const ownerSetPrivate = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigTokenContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const res = await contract.methods.setPrivate(index).send({ from: auth.user[0] });
      if (!res) {
        throw new Error(`Owner set private error! status: ${res.status}`);
      }
      return await res;
    }
    const ownerSetPublic = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigTokenContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork && deployedNetwork.address,
      );
      const res = await contract.methods.setPublic(index).send({ from: auth.user[0] });
      if (!res) {
        throw new Error(`Owner set public error! status: ${res.status}`);
      }
      return await res;
    }

    const loadItemData = async () => {
      const web3 = await web3afterWindow();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RigTokenContract.networks[networkId];
      const contract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork && deployedNetwork.address,
      );
      //console.log("loading item ", index);
      const pub = await contract.methods.allowsPublic(index).call();
      const res = await contract.methods.isClaimable(index).call();
      //const listen = await listenUriEvents();
      if (!unMounted) {
        setIsPublic(pub);
        setIsClaimable(res);
      }
      return await res;
    }

    const handleMint = () => {
      mint()
        .then(res => {
          console.log("Mint success, ", res);
          handleReloadList();
        })
        .catch(e => console.log(e));
    }

    const handlePublicMine = () => {
      pubMine()
        .then(res => {
          console.log("Public mining success, ", res);
          handleReloadList();
        })
        .catch(e => console.log(e));
    }

    const handleOwnerMine = () => {
      ownerMine()
        .then(res => {
          console.log("Owner mining success, ", res);
          handleReloadList();
        })
        .catch(e => console.log(e));
    }

    const handleOwnerSetPrivate = () => {
      ownerSetPrivate()
        .then(res => {
          console.log("Owner set private success, ", res);
          handleReloadList();
        })
        .catch(e => console.log(e));
    }

    const handleOwnerSetPublic = () => {
      ownerSetPublic()
        .then(res => {
          console.log("Owner set public success, ", res);
          handleReloadList();
        })
        .catch(e => console.log(e));
    }
    let modImage = <Image
        alt={alt}
        index={index}
        height='100%'
        width='100%'
        />

      let eventMatch = auth.updatedItems.find(el => el === index);
    if (eventMatch) {
      modImage = <img
        alt='update ready'
        src='https://via.placeholder.com/500x500?text=Rig+just+minted!+Reload+this+list.'
        height='100%'
        width='100%'
      />

    }
    const renderBtns = (param) => {
      //first determine which type of view this is
      //based on the view type show buttons.
      //
      switch (param) {
        case 0:
          return (
            <Box
              sx={{
                p: 1,
                display: {
                  xs: 'block',
                },
                textAlign: 'center',
              }}
            >
              <Button style={style.btn} onClick={handleMint}>Mint Rig</Button>
            </Box>
          )
          //break;
        case 1:
          return (
            <Box
              sx={{
                p: 1,
                display: {
                  xs: 'block',
                },
                textAlign: 'center',
              }}
            >
              <Button style={style.btn} onClick={handlePublicMine}>Mine</Button>
            </Box>
          )
          //break;
        case 2:
        //on this switch we still need to figure out if owned rig has mine available
          if (isPublic) {
              if (isClaimable) {
                return (
                  <Box
                    sx={{
                      p: 1,
                      display: {
                        xs: 'block',
                      },
                      textAlign: 'center',
                    }}
                  >
                    <Button style={style.btn} onClick={handleOwnerMine}>Mine</Button>
                    <Button style={style.btn} onClick={handleOwnerSetPrivate}>Set Private</Button>
                  </Box>
                )
              }else {
                return (
                  <Box
                    sx={{
                      p: 1,
                      display: {
                        xs: 'block',
                      },
                      textAlign: 'center',
                    }}
                  >
                    <Button style={style.btnDisabled} >Mine</Button>
                    <Button style={style.btn} onClick={handleOwnerSetPrivate}>Set Private</Button>
                  </Box>
                )
              }
          }else {
            if (isClaimable) {
              return (
                <Box
                  sx={{
                    p: 1,
                    display: {
                      xs: 'block',
                    },
                    textAlign: 'center',
                  }}
                >
                  <Button style={style.btn} onClick={handleOwnerMine}>Mine</Button>
                  <Button style={style.btn} onClick={handleOwnerSetPublic}>Set Public</Button>
                </Box>
              )
            }else {
              return (
                <Box
                  sx={{
                    p: 1,
                    display: {
                      xs: 'block',
                    },
                    textAlign: 'center',
                  }}
                >
                  <Button style={style.btnDisabled} >Mine</Button>
                  <Button style={style.btn} onClick={handleOwnerSetPublic}>Set Public</Button>
                </Box>
              )
            }
          }
          //break;
        default:

      }
    }

    useEffect(() => {
      loadItemData()
        .then(res => {
          if (!unMounted) {
            setItemLoading(false);
          }
        })
        .catch(e => console.log(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      return () => {
        setUnmounted(true);
      }
    }, []);


    if (itemLoading) {
      return (
        <LinearProgress/>
      )
    }else{
      return (
        <Grid container spacing={0} style={style.item}>

          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={0}>
              <Grid item xs></Grid>
              <Grid item xs={10} sm={8} md={6} lg={4}>
                <Box
                  sx={{
                    bgcolor: 'black',
                    borderRadius: 2,
                    p: 1,
                    pb: 0,
                  }}
                >
                    { modImage }
                </Box>
              </Grid>
              <Grid item xs></Grid>
            </Grid>

          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={0} >
              <Grid item xs></Grid>
              <Grid item xs={10} sm={8} md={6} lg={4}>
                <Grid container spacing={0}>
                  <Grid item xs={6} md={6} lg={6}>
                    <Box
                      sx={{
                        p: 1,
                        textAlign: 'center',
                      }}
                    >

                      <Box sx={{ color: 'white', display: 'inline', fontSize: 16, fontWeight: 'medium'}}>Rig  </Box>
                      <Box sx={{ color: 'white', display: 'inline', fontSize: 24, fontWeight: 'medium'}}>
                        {index}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    { renderBtns(value) }
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    }
}

export default CustomItemView;
