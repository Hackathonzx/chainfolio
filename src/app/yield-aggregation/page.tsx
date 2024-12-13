
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import YieldAggregator from '../../components/YieldAggregator';

export default function YieldAggregationPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Yield Aggregation</h1>
        <YieldAggregator />
      </main>
      <Footer />
    </>
  );
}