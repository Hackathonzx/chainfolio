import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CrossChainLiquidityAggregator from '../../components/CrossChainLiquidityAggregator';

export default function CrossChainLiquidityPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Cross-Chain Liquidity Aggregation</h1>
        <CrossChainLiquidityAggregator />
      </main>
      <Footer />
    </>
  );
}
