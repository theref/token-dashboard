# Threshold Token Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Local development

## Prerequisites

- Make sure your local chain is running (eg. Ganache).
- Clone https://github.com/keep-network/keep-core repo:
  - Make sure the `local` network config in [`/solidity-v1/truffle-config.js`](https://github.com/keep-network/keep-core/blob/main/solidity-v1/truffle-config.js#L8-L11) is correct for your chain.
- Clone https://github.com/threshold-network/solidity-contracts repo:
  - Make sure the `development` network config in [`hardhat.config.ts`](https://github.com/threshold-network/solidity-contracts/blob/main/hardhat.config.ts#L42-L44) is correct for your chain.

## Setup

`yarn`

## Deploy contracts and run dapp

`yarn start:dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
