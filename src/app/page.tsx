import { Container, Typography, Button, Grid, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ChainFolio
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Yield Aggregator integrated with MEV Protection and Cross-Chain Liquidity Aggregator
          </Typography>
          <Button variant="contained" color="primary" href="/yield-aggregation" sx={{ mt: 4 }}>
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
                Deposit ERC-20 tokens into yield protocols and automatically choose the optimal protocol for maximum yield.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                MEV Protection
              </Typography>
              <Typography variant="body1" component="p">
                Execute transactions securely using a nonce-based replay protection mechanism.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Cross-Chain Liquidity
              </Typography>
              <Typography variant="body1" component="p">
                Aggregate liquidity across DEXes and bridge assets to other chains securely.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}



