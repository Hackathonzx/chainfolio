'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Paper, Fade, Menu, MenuItem, IconButton } from '@mui/material';
import { useUser } from '@/contexts/UserContext';
import Sidebar from '@/components/Sidebar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SecurityIcon from '@mui/icons-material/Security';
import NetworkSelector from '@/components/NetworkSelector';

export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  const [view, setView] = useState('portfolio');
  const [networkMenuAnchor, setNetworkMenuAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #1a237e 30%, #311b92 90%)',
      animation: 'gradient 15s ease infinite',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        background: 'url("/grid-pattern.png")',
        animation: 'float 10s ease-in-out infinite',
      }} />

      <Grid container>
        <Grid item xs={12} md={2}>
          <Sidebar view={view} setView={setView} />
        </Grid>

        <Grid item xs={12} md={10}>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '16px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome, {user?.username || user?.walletAddress?.slice(0, 6) || 'User'}
                </Typography>
                <NetworkSelector />
              </Box>
              
              {/* Portfolio Summary */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={3}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)' }}>
                    <Typography variant="h6">Total Balance</Typography>
                    <Typography variant="h4">$10,234.56</Typography>
                  </Paper>
                </Grid>
                {/* Add more portfolio stats... */}
              </Grid>

              <Grid container spacing={4}>
                {/* Enhanced Yield Aggregation Card */}
                <Grid item xs={12} md={6}>
                  <Card sx={{
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-5px)' },
                    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                    color: 'white',
                  }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={2}>
                        <TrendingUpIcon fontSize="large" />
                        <Typography variant="h5" component="h2">
                          Yield Aggregation
                        </Typography>
                      </Box>
                      {/* Card content remains the same */}
                    </CardContent>
                  </Card>
                </Grid>

                {/* Enhanced MEV Protection Card */}
                <Grid item xs={12} md={6}>
                  <Card sx={{
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-5px)' },
                    background: 'linear-gradient(135deg, #311b92 0%, #4527a0 100%)',
                    color: 'white',
                  }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={2}>
                        <SecurityIcon fontSize="large" />
                        <Typography variant="h5" component="h2">
                          MEV Protection
                        </Typography>
                      </Box>
                      {/* Card content remains the same */}
                    </CardContent>
                  </Card>
                </Grid>

                {/* Similar enhancements for other cards... */}
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
