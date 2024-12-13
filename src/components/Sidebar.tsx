'use client';

import { Paper, List, ListItem, ListItemIcon, ListItemText, Box, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';

interface SidebarProps {
  view: string;
  setView: (view: string) => void;
}

export default function Sidebar({ view, setView }: SidebarProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 0,
      }}
    >
      <List component="nav">
        <ListItem
          button
          selected={view === 'portfolio'}
          onClick={() => setView('portfolio')}
          sx={{
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              transform: 'translateX(5px)',
            },
          }}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>

        <ListItem
          button
          selected={view === 'yield'}
          onClick={() => setView('yield')}
          sx={{
            transition: 'all 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              transform: 'translateX(5px)',
            },
          }}
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Yield Aggregation" />
        </ListItem>

        {/* Add more menu items... */}
      </List>
    </Paper>
  );
}
