// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IDeFiProtocol {
    function deposit(address _token, uint256 _amount) external;
    function withdraw(address _token, uint256 _amount) external;
    function getYield(address _token) external view returns (uint256);
}

contract YieldAggregator {
    address public owner;
    address public aiOracle;
    IDeFiProtocol[] public protocols;

    mapping(address => mapping(address => uint256)) public deposits; // user -> token -> amount

    event ProtocolAdded(address indexed protocol);
    event FundsDeposited(address indexed user, address indexed token, uint256 amount);
    event FundsWithdrawn(address indexed user, address indexed token, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    constructor(address _aiOracle) {
        owner = msg.sender;
        aiOracle = _aiOracle;
    }

    function addProtocol(address _protocol) external onlyOwner {
        protocols.push(IDeFiProtocol(_protocol));
        emit ProtocolAdded(_protocol);
    }

    function getOptimalProtocol(address _token) public view returns (IDeFiProtocol optimalProtocol) {
        uint256 highestYield = 0;
        for (uint256 i = 0; i < protocols.length; i++) {
            uint256 yield = protocols[i].getYield(_token);
            if (yield > highestYield) {
                highestYield = yield;
                optimalProtocol = protocols[i];
            }
        }
    }

    function deposit(address _token, uint256 _amount) external {
        require(_amount > 0, "Deposit amount must be greater than zero");

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        IDeFiProtocol optimalProtocol = getOptimalProtocol(_token);
        IERC20(_token).approve(address(optimalProtocol), _amount);
        optimalProtocol.deposit(_token, _amount);

        deposits[msg.sender][_token] += _amount;
        emit FundsDeposited(msg.sender, _token, _amount);
    }

    function withdraw(address _token, uint256 _amount) external {
        require(deposits[msg.sender][_token] >= _amount, "Insufficient balance");

        IDeFiProtocol optimalProtocol = getOptimalProtocol(_token);
        optimalProtocol.withdraw(_token, _amount);

        IERC20(_token).transfer(msg.sender, _amount);

        deposits[msg.sender][_token] -= _amount;
        emit FundsWithdrawn(msg.sender, _token, _amount);
    }
}
