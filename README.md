# ChainFolio

This project demonstrates a Yield Aggregator integrated with MEV Protection and a Cross-Chain Liquidity Aggregator. The application combines liquidity aggregation, yield optimization, and protection against front-running. It supports cross-chain asset bridging and includes a mock DEX for token swaps.

# Features
# Core Functionalities
1. Yield Aggregation:
- Deposit ERC-20 tokens into yield protocols.
- Automatically choose the optimal protocol for maximum yield.
- Withdraw deposited funds at any time.

2. MEV Protection:
- Execute transactions securely using a nonce-based replay protection mechanism.

3. Cross-Chain Liquidity Aggregation:
- Aggregate liquidity across DEXes.
- Bridge assets to other chains securely.

# Components
- MockDexAggregator: Simulates DEX behavior for token swaps.
- CrossChainLiquidityAggregator: Bridges tokens and aggregates liquidity.
- YieldAggregator: Optimizes token deposits into DeFi protocols.
- MEVProtection: Provides replay protection for sensitive transactions.

# Prerequisites
Before using or deploying the project, ensure you have the following:

**Tools and Software**
- Node.js (v16 or higher)
- Hardhat
- MetaMask configured for opBNB Testnet
- Valid ERC-20 tokens on the opBNB Testnet

**Dependencies**
- Install project dependencies:
   - npm install

**Project Structure**
- contracts/
   - YieldAggregator.sol: Manages token deposits, withdrawals, and optimal protocol selection.
   - MEVProtection.sol: Protects transactions from replay attacks.
   - CrossChainLiquidityAggregator.sol: Bridges assets and aggregates liquidity.
   - MockDexAggregator.sol: Mock DEX contract for token swaps.

**scripts/**
- deploy.js: Deploys the contracts to the opBNB Testnet.
- transactions.js: Demonstrates interactions with the contracts.

**hardhat.config.js:** Configuration for deployment and script execution.

# Deployment
1. Configure Hardhat
Update hardhat.config.js with opBNB Testnet RPC details:

networks: {
    opBNBTestnet: {
        url: "RPC_URL",
        accounts: ["<PRIVATE_KEY>"]
    }
},

2. Deploy Contracts

Run the deployment script:

- npx hardhat run ignition/modules/deploy.js --network opBNBTestnet

deployed addresses:

- MockDexAggregator deployed to: 0xb893DAA7F210bE7190e77249ca30281C8c0508DE

- YieldAggregator deployed to: 0xd52D2CA7975Cfbc3342863A1B76d21104a5C8266

- MEVProtection deployed to: 0x41b5Cc57269f5E2AC278B860373a812f527daE7a

- CrossChainLiquidityAggregator deployed to: 0x4B916e434E358060eb75ee0Add19Da15E93748f4

**And here are the verified contract addresses link:**

- Successfully verified contract MockDexAggregator on the block explorer.

   - https://testnet.opbnbscan.com/address/0xb893DAA7F210bE7190e77249ca30281C8c0508DE#code

- Successfully verified contract YieldAggregator on the block explorer.

   - https://testnet.opbnbscan.com/address/0xd52D2CA7975Cfbc3342863A1B76d21104a5C8266#code

- Successfully verified contract MEVProtection on the block explorer.

   - https://testnet.opbnbscan.com/address/0x41b5Cc57269f5E2AC278B860373a812f527daE7a#code

- Successfully verified contract CrossChainLiquidityAggregator on the block explorer.

   - https://testnet.opbnbscan.com/address/0x4B916e434E358060eb75ee0Add19Da15E93748f4#code


# Usage
1. Perform Transactions

Use transactions.js to:

- Deposit and withdraw tokens.
- Perform MEV-protected transactions.
- Test liquidity aggregation and cross-chain bridging.

Run the script:

npx hardhat run ignition/modules/transactions.js --network opBNBTestnet


# Future Enhancements
- Expand support for more DeFi protocols in YieldAggregator.
- Implement additional security features in MEVProtection.

# License
This project is licensed under the MIT License.

# Author
Built as a practical exploration of DeFi concepts. Contributions and feedback are welcome!

# Twitter project link

https://x.com/futhmah456/status/1866596350403678633