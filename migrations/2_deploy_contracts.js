var RigNFT = artifacts.require("./RigNFT.sol");
var RigToken = artifacts.require("./RigToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RigNFT).then(function() {
    return deployer.deploy(RigToken, RigNFT.address);
  })
};
