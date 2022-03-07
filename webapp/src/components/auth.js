import React, { useEffect, useState } from "react";
import {
  accountChangeEvent,
  permanentUriEvent,
  web3AuthRequestAccess,
  web3AuthRequestBeforeWindow,
  web3AuthRequestAfterWindow
} from "./web3Auth";

import RigNFTContract from '.././contracts/RigNFT.json';

//this doesnt feel like the right place to import views
//but I need a simple way to inject these views here
//and I'm not relying on the history here so this just works
import ConnectView from '.././views/connect';
import LinearProgress from '@mui/material/LinearProgress';

let AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  /*
  * I adapted this Provider from the example below
  * https://reactrouter.com/docs/en/v6/examples/auth
  */
  let [user, setUser] = useState(null);
  let [updatedItems, setUpdatedItems] = useState([]);
  let [updateReady, setUpdateReady] = useState(false);
  let [connecting, setConnecting] = useState(true);
  const [unMounted, setUnmounted] = useState(false);

  let connect = async () => {
    let res = await web3AuthRequestAccess();
    if (!res) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    setUser(res);
    return await res;
  }

  const initialize = async () => {
    let res = await web3AuthRequestBeforeWindow();
    if (!res) {
      setConnecting(false);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res;
  }

  const setupEventListeners = async () => {
    const web3 = await web3AuthRequestAfterWindow();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = RigNFTContract.networks[networkId];
    const contract = new web3.eth.Contract(
      RigNFTContract.abi, deployedNetwork && deployedNetwork.address,
    );
    permanentUriEvent(contract, (event) => {
      //using a temp array, update updated items state
      let item = event.returnValues[1];
      setUpdatedItems((arr) => [
        ...arr,
        item,
      ]);
      setUpdateReady(true);
    });
  }
  useEffect(() => {
    initialize()
      .then(res => {
        if (!unMounted) {
          setUser(res.length>0?res:null);
          setConnecting(false);
          accountChangeEvent((accounts) => {
            if (accounts.length>0) {
              setUser(accounts);
              console.log("Welcome to Rigcoin: ", accounts[0]);
            }else {
              console.log("Before you leave, please make sure to Tweet us https://twitter.com/rigcoinproject... And last but not least, make sure to include your Eth address in your messages to get automagically included in future stuff.");
              setUser(null);
            }
          });
          setupEventListeners();
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

  let value = { user, connect, connecting, updatedItems, updateReady };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  return React.useContext(AuthContext);
}

const RequireAuth = ({ children }) => {
  let auth = useAuth();
  if (auth.connecting) {
    return <LinearProgress />
  }else if (!auth.user) {
    return <ConnectView />;
  }else {
    return children;
  }
}

export { AuthProvider, RequireAuth, useAuth };
