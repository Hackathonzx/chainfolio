'use client';

import { Link } from 'react-scroll';
import { useUser } from '@/contexts/UserContext';
import { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const { user, setUser } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} href="/">
            Chainflow
          </Button>
        </Typography>

        <IconButton
          color="inherit"
          aria-controls="nav-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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

        <Menu
          id="nav-menu"
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} href="/yield-aggregation">Yield Aggregation</MenuItem>
          <MenuItem component={Link} href="/mev-protection">MEV Protection</MenuItem>
          <MenuItem component={Link} href="/cross-chain-liquidity">Cross-Chain Liquidity</MenuItem>
          <MenuItem component={Link} href="/mock-dex">Mock DEX</MenuItem>
        </Menu>

        {user ? (
          <>
            <Button color="inherit" onClick={handleUserMenuClick}>
              {user.walletAddress ? shortenAddress(user.walletAddress) : user.username}
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" onClick={handleUserMenuClick}>
            Sign In
          </Button>
        )}

        <Menu
          id="auth-menu"
          anchorEl={anchorEl}
          open={!user && Boolean(anchorEl)}
          onClose={handleUserMenuClose}
        >
          <MenuItem
            component="a"
            href={`https://github.com/login/oauth/authorize?client_id=Ov23liAxCnIWKyULnImt`}
          >
            Sign in with GitHub
          </MenuItem>
          <MenuItem onClick={handleWalletConnect}>
            Connect Wallet
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
