// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ICrossChainBridge {
    function bridgeAsset(address _token, uint256 _amount, uint256 _targetChainId) external;
}

interface IDexAggregator {
    function swap(address _fromToken, address _toToken, uint256 _amount) external returns (uint256);
}

contract CrossChainLiquidityAggregator {
    address public owner;
    address public bridge;
    address public dexAggregator;

    event LiquidityAggregated(address indexed token, uint256 amount);
    event AssetBridged(address indexed token, uint256 amount, uint256 targetChainId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor(address _bridge, address _dexAggregator) {
        owner = msg.sender;
        bridge = _bridge;
        dexAggregator = _dexAggregator;
    }

    function aggregateLiquidity(address _token, uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than zero");

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        IERC20(_token).approve(dexAggregator, _amount);

        uint256 swappedAmount = IDexAggregator(dexAggregator).swap(_token, _token, _amount); // Simplified swap logic
        emit LiquidityAggregated(_token, swappedAmount);
    }

    function bridgeToChain(address _token, uint256 _amount, uint256 _targetChainId) external onlyOwner {
        require(_amount > 0, "Amount must be greater than zero");

        IERC20(_token).approve(bridge, _amount);
        ICrossChainBridge(bridge).bridgeAsset(_token, _amount, _targetChainId);

        emit AssetBridged(_token, _amount, _targetChainId);
    }
}
