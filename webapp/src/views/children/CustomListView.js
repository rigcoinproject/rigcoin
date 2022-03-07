import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import CustomItemView from './CustomItemView';
import Button from '@mui/material/Button';

import { web3afterWindow } from '../.././util/CustomWeb3';
import RigNFTContract from '../.././contracts/RigNFT.json';
import RigTokenContract from '../.././contracts/RigToken.json';


import {
  initialRows,
  removeAllGivenItems
} from '../.././util/helper';

const style = {
  btn: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 14,
    margin: 5,
  },
}
const rowsPerPage = 25;
const CustomListView = (props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [rows, setRows] = useState([]);
  const [listIsLoading, setListIsLoading] = useState(true);
  const [unMounted, setUnmounted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  const incrementPage = () => {
    setCurrentPageIndex(currentPageIndex === 0 ? rowsPerPage : currentPageIndex + rowsPerPage);
    scrollToTop();
  };
  const decrementPage = () => {
    if ( currentPageIndex - rowsPerPage < 0 ) {
      setCurrentPageIndex(0);
    }else {
      setCurrentPageIndex(currentPageIndex - rowsPerPage);
    }
    scrollToTop();
  };

  const minable = async (web3, accounts, contract) => {
    const existingRigs = await contract.methods.existingRigs().call();
    const balance = await contract.methods.balanceOf(accounts[0]).call();
    let currentUserRigs = [];
    for (let i = 0; i < balance; i++) {
      let nft = await contract.methods.tokenOfOwnerByIndex(accounts[0], i).call();
      currentUserRigs.push(nft);
    }
    let modifiedExisting = Object.values(existingRigs);
    let notCurrentUsersRigs = existingRigs;
    if (currentUserRigs.length > 0) {
      notCurrentUsersRigs = await removeAllGivenItems(modifiedExisting, currentUserRigs, false)
    }
    const networkId2 = await web3.eth.net.getId();
    const deployedNetwork2 = RigTokenContract.networks[networkId2];
    let publicClaimRigs = [];
    if (deployedNetwork2) {
      const tokenContract = new web3.eth.Contract(
        RigTokenContract.abi, deployedNetwork2 && deployedNetwork2.address,
      );

      for (let i = 0; i < notCurrentUsersRigs.length; i++) {

        let publicAllowed = await tokenContract.methods.allowsPublic(notCurrentUsersRigs[i]).call();
        if (publicAllowed) {

          let claimable = await tokenContract.methods.isClaimable(notCurrentUsersRigs[i]).call();
          if (claimable) {
            publicClaimRigs.push(notCurrentUsersRigs[i]);
          }
        }
      }
    }else {
        throw new Error('Get error!');
    }
    return await publicClaimRigs;
  }

  const loadRowData = async () => {
    const web3 = await web3afterWindow();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = RigNFTContract.networks[networkId];
    const contract = new web3.eth.Contract(
      RigNFTContract.abi, deployedNetwork && deployedNetwork.address,
    );
    const maxRows = initialRows(5000);
    let res;
    switch (props.value) {
      case 0:
        const owned = await contract.methods.existingRigs().call();
        res = removeAllGivenItems(maxRows, owned, true);
        return await res;
        //break;
      case 1:
        //const ownedd = await contract.methods.existingRigs().call();
        res = await minable(web3, accounts, contract);
        return await res;
        //break;
      case 2:
        const balance = await contract.methods.balanceOf(accounts[0]).call();
        res = [];
        for (let i = 0; i < balance; i++) {
          let nft = await contract.methods.tokenOfOwnerByIndex(accounts[0], i).call();
          res.push(nft);
        }
        return await res;
        //break;
      default:
      return await {};
    }
  }

  const handleReloadList = () => {
    setListIsLoading(true);
    loadRowData()
      .then(res => {
        if (!unMounted) {
          setRows(res);
          setListIsLoading(false);
        }
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
    loadRowData()
      .then(res => {
        if (!unMounted) {
          setRows(res);
          setListIsLoading(false);
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

  if (listIsLoading) {
    return (
      <Box sx={{my:2}}>
        <LinearProgress/>
      </Box>

    )
  }else if (rows.length === 0) {
    switch (props.value) {
      case 0:
        return (
          <Box sx={{p:2, my:2, textAlign: 'center'}}>
            All Rig NFTs have been minted. Please browse around for other options. This page will be removed soon!
          </Box>
        )
        //break;
      case 1:
        return (
          <Box sx={{p:2, my:2, textAlign: 'center'}}>
            There are currently no public Rig NFTs with mining claims available. If you own a Rig NFT that is set to private, it may have a claim availabe.
            Check [Your Rigs] to find out more.
          </Box>
        )
        //break;
      case 2:
        return (
          <Box sx={{p:2, my:2, textAlign: 'center'}}>
            You don't own any Rig NFTs at this time. Try minting one from [Ownable] or browse around for other options.
          </Box>
        )
        //break;
      default:

    }
  }else {

    let prevBtn;
    if (currentPageIndex > 0) {
      prevBtn = <Button style={style.btn} onClick={decrementPage} title='Previous' variant='contained'>Previous</Button>
    }else {
      prevBtn = <div></div>
    }
    let nextBtn;
    if (currentPageIndex+rowsPerPage+1 <= rows.length) {
      nextBtn = <Button style={style.btn} onClick={incrementPage} title='Next' variant='contained'>Next</Button>
    }else {
      nextBtn = <div></div>
    }

    return (
      <div>
        <List sx={{ width: '100%' }}>
          {(currentPageIndex > 0
            ? rows.slice(currentPageIndex,  currentPageIndex+rowsPerPage)
            : rows.slice(currentPageIndex, rowsPerPage)
          ).map((row) => (
            <ListItem key={row} >
              <CustomItemView value={props.value} index={row} alt={'Rig ' + row} handleReloadList={handleReloadList}/>
            </ListItem>
          ))}
        </List>
        <Box sx={{
            p: 1,
            display: {
              xs: 'block',
            },
            textAlign: 'center',
          }}
        >
          {prevBtn}
          {nextBtn}
        </Box>
      </div>
    )
  }
};
export default CustomListView;
