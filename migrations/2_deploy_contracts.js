var NewCoin = artifacts.require("./NewCoin.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
  deployer.deploy(NewCoin);
  deployer.deploy(Voting);  
};
