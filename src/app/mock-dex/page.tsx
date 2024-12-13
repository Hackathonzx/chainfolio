
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MockDexAggregator from '@/components/MockDexAggregator';

export default function MockDexPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Mock DEX</h1>
        <MockDexAggregator />
      </main>
      <Footer />
    </>
  );
}