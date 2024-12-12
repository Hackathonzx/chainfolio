require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY, NODEREAL_API_KEY } = process.env

module.exports = {
  solidity: "0.8.0",
  networks: {
    opBNBTestnet: {
      url: process.env.RPC_URL,
      chainId: 5611,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  sourcify: {
    enabled: false
  }, 

  etherscan: {
    apiKey: {
      opbnb: "54b16e9fbdc3498797b6b11f250f0c3e", // Replace with your real API key
    },
    customChains: [
      {
        network: "opbnb",
        chainId: 5611,
        urls: {
          apiURL: "https://open-platform.nodereal.io/54b16e9fbdc3498797b6b11f250f0c3e/op-bnb-testnet/contract/",
          browserURL: "https://testnet.opbnbscan.com/",
        },
      },
    ],
  },
} 