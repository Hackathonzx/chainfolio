// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MEVProtection {
    mapping(bytes32 => bool) private usedNonces;

    modifier noMEV(bytes32 _nonce) {
        require(!usedNonces[_nonce], "Replay attack detected");
        usedNonces[_nonce] = true;
        _;
    }

    function executeTransaction(address payable _to, uint256 _amount, bytes32 _nonce) external noMEV(_nonce) {
        require(_amount > 0, "Amount must be greater than zero");
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Transaction failed");
    }
}
