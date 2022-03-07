import Web3 from "web3";

const accountChangeEvent = (callback) =>
  new Promise(() => {
    (async () => {
      // listen for account change events on compatible browser
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts) => {
          callback(accounts)
        });
      }
    })();
  });

const permanentUriEvent = (contract, callback) =>
  new Promise(() => {
    contract.events.PermanentURI()
      .on('data', event => callback(event))
  });

const web3AuthRequestAccess = () =>
  new Promise((resolve, reject) => {
    (async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({method:'eth_requestAccounts'});
          const accounts = await web3.eth.getAccounts();
          resolve(accounts);
        } catch (error) {
          reject(error);
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
        }
      }else{
        try {
            console.log("Install Metamask and reload this page, or use a web3 browser like Brave Browser. https://brave.com/download/");
            resolve([]);
        } catch (error) {
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
          reject(error);
        }
      }
    })();
  });

const web3AuthRequestBeforeWindow = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {

      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({method:'eth_accounts'});
          const accounts = await web3.eth.getAccounts();
          resolve(accounts);
        } catch (error) {
          reject(error);
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
        }
      }else{
        try {
            console.log("Install Metamask and reload this page, or use a web3 browser like Brave Browser. https://brave.com/download/");
            resolve([]);
        } catch (error) {
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
          reject(error);
        }
      }
    });
  });

const web3AuthRequestAfterWindow = () =>
  new Promise((resolve, reject) => {
    (async () => {
      if (window.ethereum) {
        //console.log("loaderrrr");
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({method:'eth_accounts'});
          //const accounts = await web3.eth.getAccounts();
          resolve(web3);
        } catch (error) {
          reject(error);
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
        }
      }else{
        try {
            console.log("Install Metamask and reload this page, or use a web3 browser like Brave Browser. https://brave.com/download/");
            resolve([]);
        } catch (error) {
          console.log("Something is terribly wrong. Please notify admin info@thisdomain.tld")
          reject(error);
        }
      }
    })();
  });


export { web3AuthRequestAccess, web3AuthRequestBeforeWindow, web3AuthRequestAfterWindow, accountChangeEvent, permanentUriEvent }
