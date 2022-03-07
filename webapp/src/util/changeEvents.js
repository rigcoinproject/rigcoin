const connectChange = (dev) =>
  new Promise(() => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // listen for account change events on compatible browser
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts) => {
          dev(accounts);
        });
      }
    });
  });

const uriEvent = (contract, cb) =>
  new Promise(() => {
    contract.events.PermanentURI()
      .on('data', event => cb(event))
  });

const publicClaimEvent = (contract, cb) =>
  new Promise(() => {
    contract.events.PublicClaim()
      .on('data', event => cb(event))
  });

const ownerClaimEvent = (contract, cb) =>
  new Promise(() => {
    contract.events.OwnerClaim()
      .on('data', event => cb(event))
  });

const setPublicEvent = (contract, cb) =>
  new Promise(() => {
    contract.events.SetPublic()
      .on('data', event => cb(event))
  });

const setPrivateEvent = (contract, cb) =>
  new Promise(() => {
    contract.events.SetPrivate()
      .on('data', event => cb(event))
  });

export { connectChange, uriEvent, publicClaimEvent, ownerClaimEvent, setPublicEvent, setPrivateEvent };
