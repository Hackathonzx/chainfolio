'use client';

import { useState } from 'react';
import { Button, Menu, MenuItem, Avatar, Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const networks = [
  { name: 'Ethereum', icon: '/eth-logo.png' },
  { name: 'Bitcoin', icon: '/btc-logo.png' },
  { name: 'BNB Chain', icon: '/bnb-logo.png' },
  { name: 'Arbitrum One', icon: '/arbitrum-logo.png' },
  { name: 'Litecoin', icon: '/ltc-logo.png' },
];

export default function NetworkSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNetworkSelect = (network: typeof networks[0]) => {
    setSelectedNetwork(network);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src={selectedNetwork.icon} sx={{ width: 24, height: 24 }} />
          <Typography>{selectedNetwork.name}</Typography>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: '12px',
            minWidth: 180,
          },
        }}
      >
        {networks.map((network) => (
          <MenuItem
            key={network.name}
            onClick={() => handleNetworkSelect(network)}
            selected={network.name === selectedNetwork.name}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar src={network.icon} sx={{ width: 24, height: 24 }} />
              <Typography>{network.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
