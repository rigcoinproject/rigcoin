import Web3 from "web3";

const web3afterWindow = (dev) =>
  new Promise((resolve, reject) => {
    //called after page is loaded
    async function initialize() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({method:'eth_requestAccounts'});
          resolve(web3);
        } catch (error) {
          reject(error);
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
    }
    initialize()
  });


const web3BeforeWindow = (dev) =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({method:'eth_accounts'});
          //const accounts = await web3.eth.getAccounts();
          resolve(web3);
        } catch (error) {
          reject(error);
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

export { web3BeforeWindow, web3afterWindow };
