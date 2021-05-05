const StartNotary = artifacts.require("../contracts/StarNotary.sol");


module.exports = function(deployer) {
  deployer.deploy(StartNotary);
  
};
