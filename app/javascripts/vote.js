web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
votingAbi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
VotingContract = web3.eth.contract(votingAbi);
votingInstance = VotingContract.at('0xf204a4ef082f5c04bb89f7d5e6568b796096735a');
candidates = {"Malu": "candidate-1", "Tara": "candidate-2", "Kevin": "candidate-3", "Veysel": "candidate-4"}

function voteForCandidate(candidate) {
 candidateName = $("#candidate").val();
 try {
  votingInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
   let div_id = candidates[candidateName];
   $("#"+div_id).html(votingInstance.totalVotesFor.call(candidateName).toString());
  });
 } catch (err) {
 }
}

$(document).ready(function() {
 candidateNames = Object.keys(candidates);
 for (var i = 0; i < candidateNames.length; i++) {
  let name = candidateNames[i];
  let val = votingInstance.totalVotesFor.call(name).toString()
  $("#"+candidates[name]).html(val);
 }
});
