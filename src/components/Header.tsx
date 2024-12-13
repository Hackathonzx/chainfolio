'use client';

import { Link } from 'react-scroll';
import { useUser } from '@/contexts/UserContext';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
// import logo from '@/public/logo.png'; // Adjust the path to your logo image

export default function Header() {
  const { user, setUser } = useUser();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [authMenuAnchorEl, setAuthMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleUserMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleAuthMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAuthMenuAnchorEl(event.currentTarget);
  };

  const handleAuthMenuClose = () => {
    setAuthMenuAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    handleUserMenuClose();
  };

  const handleWalletConnect = () => {
    // Implement wallet connection logic here
    // For now, we'll simulate a connected wallet
    const dummyUser = {
      walletAddress: '0x1234...ABCD',
    };
    setUser(dummyUser);
    handleUserMenuClose();
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" href="/" sx={{ mr: 2 }}>
          <Image src='/logo.jpeg' alt="Chainflow" width={40} height={40} />
        </IconButton>

        {/* Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">
            <Link to="yield-aggregation" smooth={true} duration={500}>
              Yield Aggregation
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="mev-protection" smooth={true} duration={500}>
              MEV Protection
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="cross-chain-liquidity" smooth={true} duration={500}>
              Cross-Chain Liquidity
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="mock-dex" smooth={true} duration={500}>
              Mock DEX
            </Link>
          </Button>
        </Box>

        {/* User Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {user ? (
            <>
              <Button color="inherit" onClick={handleUserMenuClick}>
                {user.walletAddress ? shortenAddress(user.walletAddress) : user.username}
              </Button>
              <Menu
                id="user-menu"
                anchorEl={userMenuAnchorEl}
                open={Boolean(userMenuAnchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleAuthMenuClick}>
                Sign In
              </Button>
              <Menu
                id="auth-menu"
                anchorEl={authMenuAnchorEl}
                open={Boolean(authMenuAnchorEl)}
                onClose={handleAuthMenuClose}
              >
                <MenuItem
                  component="a"
                  href={`https://github.com/login/oauth/authorize?client_id=Ov23liAxCnIWKyULnImt`}
                >
                  Sign in with GitHub
                </MenuItem>
                <MenuItem onClick={handleWalletConnect}>Connect Wallet</MenuItem>
              </Menu>
            </>
          )}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuClick}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          id="mobile-menu"
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="yield-aggregation" smooth={true} duration={500}>
              Yield Aggregation
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="mev-protection" smooth={true} duration={500}>
              MEV Protection
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="cross-chain-liquidity" smooth={true} duration={500}>
              Cross-Chain Liquidity
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link to="mock-dex" smooth={true} duration={500}>
              Mock DEX
            </Link>
          </MenuItem>
          {user ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={handleAuthMenuClick}>Sign In</MenuItem>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
