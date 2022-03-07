require('dotenv').config();

const path = require("path");

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "0.8.2"
    }
  },
  contracts_build_directory: path.join(__dirname, "webapp/src/contracts"),
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
   },
   rinkeby: {
     provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.PROJECT_ID}`),
     network_id: 4,
     gas: 5500000,
     confirmations: 2,
     timeoutBlocks: 200,
     skipDryRun: true,
     from: "0xA44c128A2592B80AA65aA7a0B2B181B4876D7Ee6"
   },
  }
};
