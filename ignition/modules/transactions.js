const hre = require("hardhat");
const { ethers } = require("ethers"); // Change from hardhat to ethers package directly

async function main() {
    // Use Hardhat's provider
    const provider = hre.ethers.provider;
    
    // Get network info
    const network = await provider.getNetwork();
    console.log(`Connected to network: ${network.name} (Chain ID: ${network.chainId})`);

    // Use Hardhat's signers
    const [signer] = await hre.ethers.getSigners();
    const signerAddress = await signer.getAddress();
    console.log(`Signer Address: ${signerAddress}`);

    // Contract Addresses
    const yieldAggregatorAddress = "0xd52D2CA7975Cfbc3342863A1B76d21104a5C8266";
    const tokenAddress = "0xc42afaa04b651fb1fb42c31b34d353b2f80b97fa";

    try {
        const Token = new hre.ethers.Contract(tokenAddress, [
            "function balanceOf(address owner) view returns (uint256)",
            "function approve(address spender, uint256 amount) returns (bool)"
        ], signer);
        
        const YieldAggregator = new hre.ethers.Contract(yieldAggregatorAddress, [
            "function deposit(address token, uint256 amount)"
        ], signer);

        // // Create contract instances using Hardhat's ethers
        // const Token = await hre.ethers.getContractAt("IERC20", tokenAddress, signer);
        // const YieldAggregator = await hre.ethers.getContractAt("YieldAggregator", yieldAggregatorAddress, signer);

        // Fetch token balance
        const signerBalance = await Token.balanceOf(signerAddress);
        const formattedBalance = hre.ethers.BigNumber.from(signerBalance);
        console.log(`Token Balance: ${hre.ethers.utils.formatUnits(formattedBalance, 18)} tokens`);

        // Deposit Tokens into YieldAggregator
        const depositAmount = hre.ethers.utils.parseUnits("10", 18);

        if (formattedBalance.gte(depositAmount)) {
            console.log("Approving tokens for YieldAggregator...");
            const approveTx = await Token.approve(yieldAggregatorAddress, depositAmount);
            await approveTx.wait();
            console.log(`Approved ${hre.ethers.utils.formatUnits(depositAmount, 18)} tokens for YieldAggregator.`);

            console.log("Depositing tokens...");
            const depositTx = await YieldAggregator.deposit(tokenAddress, depositAmount);
            await depositTx.wait();
            console.log(`Deposited ${hre.ethers.utils.formatUnits(depositAmount, 18)} tokens.`);
        } else {
            console.error("Insufficient balance for deposit.");
        }
    } catch (error) {
        console.error("Error encountered:", error);
        console.error("Detailed error message:", error.message);
        console.error("Detailed error stack:", error.stack);
    }
}

main().catch((error) => {
    console.error("Script execution failed:", error);
    process.exitCode = 1;
});