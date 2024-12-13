'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Container maxWidth="lg">
        <Box
          id="home"
          sx={{
            textAlign: 'center',
            py: 10,
            background: 'linear-gradient(135deg, #ff4081 0%, #7c4dff 100%)',
            color: '#fff',
            animation: 'fadeIn 2s',
          }}
        >
          <Typography variant="h2" gutterBottom>
            Welcome to Chainflow
          </Typography>
          <Typography variant="h5" gutterBottom>
            A Next-Generation DeFi Platform
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/app"
            sx={{ mt: 4 }}
          >
            Get Started
          </Button>
        </Box>

        <Box
          id="yield-aggregation"
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #7c4dff 0%, #18ffff 100%)',
            color: '#fff',
            animation: 'fadeIn 2s',
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Yield Aggregation
          </Typography>
          <Typography variant="body1" align="center">
            Maximize your returns with automated yield farming strategies.
          </Typography>
        </Box>

        <Box
          id="mev-protection"
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #18ffff 0%, #ff4081 100%)',
            color: '#fff',
            animation: 'fadeIn 2s',
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            MEV Protection
          </Typography>
          <Typography variant="body1" align="center">
            Secure your transactions against MEV attacks.
          </Typography>
        </Box>

        <Box
          id="cross-chain-liquidity"
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #ff4081 0%, #7c4dff 100%)',
            color: '#fff',
            animation: 'fadeIn 2s',
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Cross-Chain Liquidity
          </Typography>
          <Typography variant="body1" align="center">
            Access liquidity across multiple chains seamlessly.
          </Typography>
        </Box>

        <Box
          id="mock-dex"
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #7c4dff 0%, #18ffff 100%)',
            color: '#fff',
            animation: 'fadeIn 2s',
          }}
        >
          <Typography variant="h3" gutterBottom align="center">
            Mock DEX
          </Typography>
          <Typography variant="body1" align="center">
            Swap tokens using our Mock DEX interface.
          </Typography>
        </Box>
      </Container>
      {/* <Footer /> */}
    </>
  );
}



