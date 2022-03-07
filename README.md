# Welcome to Rigcoin

This repo contains the official open sources for Rigcoin NFTs and Tokens. The webapp is available
on Brave at https://rigcoin.eth and on legacy browsers at https://rigcoin.eth.link.


**Connect on Twitter @ Rigcoinproject**


**Official Contract Addresses** [THESE ARE THE ONLY OFFICIAL RIGCOIN ADDRESSES]

- Mainnet NFT Contract   'coming soon'
- Mainnet Token Contract 'coming soon'


**Rinkeby Testnet Addresses** [TESTING ONLY - UNTRACKED]
- Rinkeby NFT Contract   [0xBAe952F52f8A04C72604019636Ee966124C158C0](https://rinkeby.etherscan.io/address/0xBAe952F52f8A04C72604019636Ee966124C158C0)
- Rinkeby Token Contract [0xD9A48eF2Eed8E295CF546d925F08834cbe85Fa12](https://rinkeby.etherscan.io/address/0xD9A48eF2Eed8E295CF546d925F08834cbe85Fa12)


### Image Proofs

There are 3 image sizes for each NFT, but only the 600x600 size is what
will show up inside Metamask and other platforms by default. Each NFT conforms to the
"ERC721 Metadata JSON Schema" [https://eips.ethereum.org/EIPS/eip-721](https://eips.ethereum.org/EIPS/eip-721), and each has
additional metadata outlined below - some of which is not currently supported, but
has been included for the future.

-     BASE_JSON = {
        "name": BASE_NAME,
        "description": BASE_OBJ_DESC,            
        "image": BASE_IMAGE_URL,                    (600x600) IPFS
        "medium_image": BASE_MEDIUM_IMAGE_URL,    (1200x1200) IPFS
        "large_image": BASE_LARGE_IMAGE_URL,      (2400x2400) IPFS
        "external_url": BASE_SITE_URL,            (ENS domain)
        "attributes": [],
        "background_color": BASE_COLOR,
      }`

**JSON objects are all stored on IPFS**

-     QmR6f6zhLNfsE6upkZkJCeuSSw2SJosy3Z6aJgAC5DQFfU


### Rigcoin Webapp

The intial build was pushed to IPFS and is updated via the published IPNS hash.

**QM hash**  
-      QmRCu68Lem7mQDkwNUqdd9ZEgQhW7R45EKpMhnEW9M5SPY
**IPNS hash**
-      k51qzi5uqu5dienjx47dvf4yjyf39i6n51j7hy5uozdtid8of8hm5yl0wg3yqf
