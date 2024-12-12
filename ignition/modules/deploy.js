const { ethers } = require("hardhat");

async function main() {

  const AiOracleAddress = "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7"; // chainlink
  const BridgeContractAddress = "0x6EDCE65403992e310A62460808c4b910D972f10f"; // from layerzero

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

      // Deploy Mock Dex Aggregator
      const MockDexAggregator = await ethers.getContractFactory("MockDexAggregator");
      mockDexAggregator = await MockDexAggregator.deploy();
      await mockDexAggregator.waitForDeployment();
      console.log("MockDexAggregator deployed to:", await mockDexAggregator.getAddress());

    // Deploy YieldAggregator
    const YieldAggregator = await ethers.getContractFactory("YieldAggregator");
    const yieldAggregator = await YieldAggregator.deploy(AiOracleAddress);
    await yieldAggregator.waitForDeployment();
    console.log("YieldAggregator deployed to:", await yieldAggregator.getAddress());

     // Deploy MEVProtection
     const MEVProtection = await ethers.getContractFactory("MEVProtection");
     const mevProtection = await MEVProtection.deploy();
     await mevProtection.waitForDeployment();
     console.log("MEVProtection deployed to:", await mevProtection.getAddress());

    // Deploy CrossChainLiquidityAggregator
    const CrossChainLiquidityAggregator = await ethers.getContractFactory(
        "CrossChainLiquidityAggregator"
    );
    const crossChainLiquidityAggregator = await CrossChainLiquidityAggregator.deploy(
       "0x6EDCE65403992e310A62460808c4b910D972f10f",
        "0x359451AC3C73827A7653C0Ab7D30243844a55447"
    );
    await crossChainLiquidityAggregator.waitForDeployment();
    console.log(
        "CrossChainLiquidityAggregator deployed to:",
        await crossChainLiquidityAggregator.getAddress()
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
