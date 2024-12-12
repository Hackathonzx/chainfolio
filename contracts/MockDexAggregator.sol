// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockDexAggregator {
    mapping(address => uint256) public liquidity;

    function aggregateLiquidity(address _token, uint256 _amount) external {
        liquidity[_token] += _amount;
    }

    function getLiquidity(address _token) external view returns (uint256) {
        return liquidity[_token];
    }
}
