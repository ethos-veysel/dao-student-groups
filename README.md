# Inspiration
There's alot of hype around cryptocurrency and blockchain recently and a corresponding perception issue. The people who are most excited about blockchain right now (besides developers) are the people making money trading various cryptocurrencies. The culture around trading crypto and buying #lambos distracts from the revolutionary benefits of the underlying technology of blockchain. Our motivation is to highlight these benefits and inspire the next wave of blockchain developers and enthusiasts.

#What it does
Bit_Nation is a proof of concept of a Decentralized Autonomous Organization. User's can create or sign up with an existing organization, call or participate in a poll/vote, and trade with other members of the organization using the organizations own currency. This is all accomplished by developing immutable smart contracts deployed to a decentralized network.

#How we built it
We used the Truffle Framework to build and test a series of smart contracts. The smart contracts themselves are written in the Solidity programming language. Smart contracts are compiled and deployed to a local blockchain hosted in a program called Ganache. This composes our backend.

The frontend uses a chrome extension called MetaMask to handle the RPC calls to the blockchain. A library called web3.js is used to abstract the needed RPC calls to javascript functions. Besides these two dependencies our front end is purely html and javascript based, illustrating the simplicity of developing a decentralized application.

#Challenges we ran into
Decomposing technical concepts in a way thats accessible to the blockchain initiate.

#Accomplishments that we're proud of
Getting a working prototype up and running in less than 24 hours.

#What we learned
Blockchain technology is still in its infancy and there are still many technical limitations.

#What's next for Bit_Nation: Blockchain Registry for Student Groups
We want to polish our library and release it as a standalone solution.

#Built With
solidity
javascript
blockchain
ethereum
