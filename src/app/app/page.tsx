'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUser } from '@/contexts/UserContext';

export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.username || 'User'}
        </Typography>
        <Grid container spacing={4}>
          {/* Yield Aggregation Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Yield Aggregation
                </Typography>
                <Typography variant="body2">
                  Maximize your earnings with our Yield Aggregator.
                </Typography>
                <Button variant="contained" color="primary" href="/yield-aggregation" sx={{ mt: 2 }}>
                  Access Yield Aggregator
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* MEV Protection Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  MEV Protection
                </Typography>
                <Typography variant="body2">
                  Secure your transactions with MEV Protection.
                </Typography>
                <Button variant="contained" color="primary" href="/mev-protection" sx={{ mt: 2 }}>
                  Use MEV Protection
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Cross-Chain Liquidity Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cross-Chain Liquidity
                </Typography>
                <Typography variant="body2">
                  Bridge assets across chains seamlessly.
                </Typography>
                <Button variant="contained" color="primary" href="/cross-chain-liquidity" sx={{ mt: 2 }}>
                  Bridge Assets
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Mock DEX Card */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Mock DEX
                </Typography>
                <Typography variant="body2">
                  Swap tokens using our Mock DEX interface.
                </Typography>
                <Button variant="contained" color="primary" href="/mock-dex" sx={{ mt: 2 }}>
                  Access Mock DEX
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
