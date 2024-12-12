const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Yield Aggregator and Related Contracts", function () {
  let YieldAggregator, CrossChainLiquidityAggregator, MEVProtection;
  let yieldAggregator, crossChainLiquidityAggregator, mevProtection;
  let owner, addr1, addr2;
  let mockProtocol1, mockProtocol2, mockBridge, mockDexAggregator;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const AiOracleAddress = "0x143db3CEEfbdfe5631aDD3E50f7614B6ba708BA7";
    const BridgeContractAddress = "0x6EDCE65403992e310A62460808c4b910D972f10f"; // from layerzero
    const DexAggregatorAddress = "YourDexAggregatorAddress"; 


    // Deploy Yield Aggregator
    const YieldAggregator = await ethers.getContractFactory("YieldAggregator");
    yieldAggregator = await YieldAggregator.deploy(mockDexAggregator.address);

    // Deploy CrossChainLiquidityAggregator
    const CrossChainLiquidityAggregator = await ethers.getContractFactory("CrossChainLiquidityAggregator");
    crossChainLiquidityAggregator = await CrossChainLiquidityAggregator.deploy(
      mockBridge.address,
      mockDexAggregator.address
    );

    // Deploy MEVProtection
    const MEVProtection = await ethers.getContractFactory("MEVProtection");
    mevProtection = await MEVProtection.deploy();
  });

  describe("Yield Aggregator", function () {
    it("Should allow the owner to add protocols", async function () {
      await yieldAggregator.addProtocol(mockProtocol1.address);
      await yieldAggregator.addProtocol(mockProtocol2.address);
      const protocols = await yieldAggregator.getProtocols();
      expect(protocols).to.include(mockProtocol1.address);
      expect(protocols).to.include(mockProtocol2.address);
    });

    it("Should revert if a non-owner tries to add protocols", async function () {
      await expect(
        yieldAggregator.connect(addr1).addProtocol(mockProtocol1.address)
      ).to.be.revertedWith("Only owner can add protocols");
    });

    it("Should fetch the optimal yield", async function () {
      await yieldAggregator.addProtocol(mockProtocol1.address);
      await yieldAggregator.addProtocol(mockProtocol2.address);

      await mockProtocol1.setYield(10);
      await mockProtocol2.setYield(15);

      const optimalYield = await yieldAggregator.getOptimalYield("0xToken");
      expect(optimalYield).to.equal(15);
    });

    it("Should deposit into the protocol with the highest yield", async function () {
      await yieldAggregator.addProtocol(mockProtocol1.address);
      await yieldAggregator.addProtocol(mockProtocol2.address);

      await mockProtocol1.setYield(10);
      await mockProtocol2.setYield(20);

      await yieldAggregator.optimizeYield("0xToken", 100);

      const deposits1 = await mockProtocol1.getDeposits();
      const deposits2 = await mockProtocol2.getDeposits();

      expect(deposits1).to.equal(0);
      expect(deposits2).to.equal(100);
    });
  });

  describe("CrossChainLiquidityAggregator", function () {
    it("Should allow the owner to bridge assets", async function () {
      await crossChainLiquidityAggregator.bridgeToChain("0xToken", 100, 1);
      const bridgeLogs = await mockBridge.getBridgedAssets();
      expect(bridgeLogs[0].amount).to.equal(100);
      expect(bridgeLogs[0].token).to.equal("0xToken");
      expect(bridgeLogs[0].chainId).to.equal(1);
    });

    it("Should revert if a non-owner tries to bridge assets", async function () {
      await expect(
        crossChainLiquidityAggregator.connect(addr1).bridgeToChain("0xToken", 100, 1)
      ).to.be.revertedWith("Only owner can initiate bridging");
    });

    it("Should aggregate liquidity from multiple sources", async function () {
      await crossChainLiquidityAggregator.aggregateLiquidity("0xToken", 200);
      const liquidity = await mockDexAggregator.getLiquidity("0xToken");
      expect(liquidity).to.equal(200);
    });
  });

  describe("MEVProtection", function () {
    it("Should execute a transaction without MEV", async function () {
      await mevProtection.executeTransaction(addr1.address, { value: ethers.utils.parseEther("1.0") });
      const balance = await ethers.provider.getBalance(addr1.address);
      expect(balance).to.be.above(0);
    });

    it("Should revert if MEV is detected (mock logic)", async function () {
      await mevProtection.setMEVDetected(true);
      await expect(
        mevProtection.executeTransaction(addr1.address, { value: ethers.utils.parseEther("1.0") })
      ).to.be.revertedWith("MEV detected");
    });
  });
});
