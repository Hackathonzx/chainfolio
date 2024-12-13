'use client';

import { Container, Typography, Button, Grid, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Chainflow
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            A Next-Generation DeFi Platform
          </Typography>
          <Button variant="contained" color="primary" href="/app" sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Yield Aggregation
              </Typography>
              <Typography variant="body1" component="p">
                Maximize your returns with automated yield farming strategies.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                MEV Protection
              </Typography>
              <Typography variant="body1" component="p">
                Secure your transactions against MEV attacks.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Cross-Chain Liquidity
              </Typography>
              <Typography variant="body1" component="p">
                Access liquidity across multiple chains seamlessly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}



